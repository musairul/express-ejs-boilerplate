const { body, validationResult } = require("express-validator");

const userModel = require("../models/userModel");

// Function to render the list of all users
const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.render("pages/users/index", { users, title: "Users List" });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Server Error");
  }
};

// Function to render a single user by ID
const getUserById = async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  try {
    const user = await userModel.getUserById(userId);
    if (user) {
      res.render("pages/users/profile", { user, title: "User Profile" });
    } else {
      res.status(404).send("User Not Found");
    }
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    res.status(500).send("Server Error");
  }
};

// Function to handle creating a new user
const createUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = await userModel.createUser({ name, email });
    res.redirect(`/users/${newUser.id}`);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send("Server Error");
  }
};

// Function to handle updating an existing user
const updateUser = async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const { name, email } = req.body;
  try {
    const updatedUser = await userModel.updateUser(userId, { name, email });
    if (updatedUser) {
      res.redirect(`/users/${updatedUser.id}`);
    } else {
      res.status(404).send("User Not Found");
    }
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).send("Server Error");
  }
};

// Function to handle deleting a user
const deleteUser = async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  try {
    await userModel.deleteUser(userId);
    res.redirect("/users");
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
