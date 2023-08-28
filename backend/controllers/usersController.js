const User = require("../models/User");
const Entry = require("../models/Entry");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

// @desc Get all users
// @route GET /users
// @access Private
const getUsers = asyncHandler(async (req, res) => {
  // console.log(req.query)
  const { id, email } = req.query;
  if (email) { // find the user by their email and return their id
    const user = await User.findOne({ email }).select("_id").lean().exec();
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    res.json({ id: user._id });
  } else if (id) {
    // Get a singular user and return it
    // Check if the user with the given ID exists
    const user = await User.findById(id).select("-password").lean().exec();
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    // Return the user object
    res.json(user);
  } else {
    // Get all users from MongoDB
    const users = await User.find().select("-password").lean();
    // If no users
    if (!users?.length) {
      return res.status(400).json({ message: "No users found" });
    }
    res.json(users);
  }
});

// @desc Create new user
// @route POST /users
// @access Public
const createNewUser = asyncHandler(async (req, res) => {
  let { email, password, fullname, title, quote, gender, location } = req.body;

  // Confirm data
  if (!email || !password || !fullname) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Check for duplicate Email
  const duplicate = await User.findOne({ email }).lean().exec();

  if (duplicate) {
    return res.status(409).json({ message: "Duplicate email" });
  }

  // Hash password
  const hashedPwd = await bcrypt.hash(password, 10); // salt rounds

  if (title === "") { title = "Add your title" }
  if (quote === "") { quote = "Add your quote" }
  if (gender === "") { gender = "Add your gender" }
  if (location === "") { location = "Add your location" }

  const userObject = { email, password: hashedPwd, fullname, title, quote, gender, location };

  // Create and store new user
  const user = await User.create(userObject);

  if (user) {
    //created
    res.status(201).json({ message: `New user ${email} created` });
  } else {
    res.status(400).json({ message: "Invalid user data received" });
  }
});

// @desc Update a user
// @route PATCH /users
// @access Private
const updateUser = asyncHandler(async (req, res) => {
  const { id, email, password, fullname, title, quote, gender, location } = req.body;

  // Confirm data
  if (!id || !email || !fullname) {
    return res
      .status(400)
      .json({ message: "All fields except password are required" });
  }

  // Does the user exist to update?
  const user = await User.findById(id).exec();

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  // Check for duplicate
  const duplicate = await User.findOne({ email }).lean().exec();

  // Allow updates to the original user
  if (duplicate && duplicate?._id.toString() !== id) {
    return res.status(409).json({ message: "Duplicate email" });
  }

  user.email = email;
  user.fullname = fullname;
  user.title = title;
  user.quote = quote;
  user.gender = gender;
  user.location = location;
  if (password) {
    // Hash password
    user.password = await bcrypt.hash(password, 10); // salt rounds
  }

  const updatedUser = await user.save();

  res.json({ message: `${updatedUser.email} updated` });
});


// @desc Delete a user
// @route DELETE /users
// @access Private
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.body;

  // Confirm data
  if (!id) {
    return res.status(400).json({ message: "User ID Required" });
  }

  // Does the user exist to delete?
  const user = await User.findById(id).exec();

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  // delete all entries associated with the user
  await Entry.deleteMany({ userID: id });

  const result = await user.deleteOne();

  const reply = `Email ${result.email} with ID ${result._id} deleted`;

  res.json(reply);
});

module.exports = {
  getUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
