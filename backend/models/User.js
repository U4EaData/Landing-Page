const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  
  title: {
    type: String,
    required: false,
  },
  quote: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("User", userSchema);
