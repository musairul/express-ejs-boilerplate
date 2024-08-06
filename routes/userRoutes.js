const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Route to get all users
router.get("/", userController.getAllUsers);

// Route to get a single user by ID
router.get("/:id", userController.getUserById);

// Route to create a new user (GET for the form, POST for submission)
router.get("/create", (req, res) =>
  res.render("pages/users/create", { title: "Create User" })
);
router.post("/create", userController.createUser);

// Route to update an existing user (GET for the form, POST for submission)
router.get("/:id/edit", userController.getUserById, (req, res) =>
  res.render("pages/users/edit", { title: "Edit User" })
);
router.post("/:id/edit", userController.updateUser);

// Route to delete a user
router.post("/:id/delete", userController.deleteUser);

module.exports = router;
