const db = require("../db.js");

function getProfile(req, res) {
  const { id } = req.params;

  db.select("*")
    .from("users")
    .where({
      id,
    })
    .then((user) => {
      console.log(user[0]);
      if (user.length) {
        res.json(user[0]);
      } else {
        res.status(400).json("Not found...");
      }
    })
    .catch((err) => {
      res.status(400).json("Error getting user");
    });
}

module.exports = {
  getProfile,
};
