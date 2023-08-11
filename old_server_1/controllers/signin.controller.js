const database = require("../models/users.model");
const model = require("../models/users.model");
const db = require("../db.js");
const bcrypt = require("bcrypt");

function signinUser(req, res) {
  const { email, password } = req.body;
  db.select("email", "hash")
    .from("login")
    .where("email", "=", email)
    .then((data) => {
      const isValid = bcrypt.compareSync(password, data[0].hash);
      if (isValid) {
        return db
          .select("*")
          .from("users")
          .where("email", "=", email)
          .then((user) => {
            console.log(user[0]);
            res.json(user[0]);
          })
          .catch((err) => res.status(400).json("Unable to login"));
      }
    })
    .catch((err) => res.status(400).json("Wrong credentials"));
}

module.exports = {
  signinUser,
};
