const express = require("express");
const cors = require("cors");
const model = require("./models/users.model");
const pool = require("./dbConfig.js");
const bcrypt = require("bcrypt");
const db = require("./db.js");
const knex = require("knex");
require("dotenv").config();
// 9:13 yt

//console.log(db2);

/* Controller imports */
const signinController = require("./controllers/signin.controller");
const registerController = require("./controllers/register.controller");
const profileController = require("./controllers/profile.controller");

const app = express();
const PORT = 5000;

app.use(express.json());

app.use(cors());

// const db = knex({
//   client: "pg",
//   connection: {
//     host: process.env.DATABASE_HOST,
//     port: process.env.DATABASE_PORT,
//     user: process.env.DATABASE_USER,
//     password: process.env.DATABASE_PASSWORD,
//     database: process.env.DATABASE_NAME,
//   },
// });

// db2
//   .select("*")
//   .from("users")
//   .then((data) => {
//     console.log(data);
//   });

// w/o knex
// pool.connect();
// pool.query("SELECT * from login", (err, res) => {
//   console.log(err, res);
//   pool.end();
// });

/* Home */
app.get("/", (req, res) => {
  res.json("Home");
});

app.post("/signin", signinController.signinUser);

app.post("/register", registerController.registerUser);

app.get("/profile/:id", profileController.getProfile);

/* Get specific user */
// app.get("/:userId", (req, res) => {
//   const userId = Number(req.params.userId);
//   const user = database.users[userId];
//   if (user) {
//     res.status(200).json(user);
//   } else {
//     res.status(404).json({
//       error: "User not found",
//     });
//   }
// });

app.post("/user", (req, res) => {
  res.send(req.body);
  console.log("received from frontend: ", req.body.user);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
