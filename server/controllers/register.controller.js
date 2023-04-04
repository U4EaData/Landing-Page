const model = require("../models/users.model");
const db = require("../db.js");
const bcrypt = require("bcrypt");

// trx see udemy sign in video

function registerUser(req, res) {
  // db.select("*")
  //   .from("users")
  //   .then((data) => {
  //     console.log(data);
  //   });

  const { name, email, password } = req.body;
  console.log(password);
  const hash = bcrypt.hashSync(password, 10);

  // make sure we can do all actions - register and login - then commit else rollback
  db.transaction((trx) => {
    trx
      .insert({
        hash: hash,
        email: email,
      })
      .into("login")
      .returning("email")
      .then((loginEmail) => {
        return trx("users")
          .returning("*")
          .insert({
            name: name,
            email: loginEmail[0].email,
          })
          .then((user) => {
            res.json(user[0]); // when we register a user there is only one, so return that obj
          })
          .then(trx.commit)
          .catch(trx.rollback);
      });
  }).catch((err) => {
    res.status(400).json("Unable to register...");
    console.log("Error occured at register: ", err);
  });
  // res.json("Success");
}

module.exports = {
  registerUser,
};
