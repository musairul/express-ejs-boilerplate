// Define any model related functions here
const { Pool } = require("pg");
const pool = require("../app").pool; // Import the PostgreSQL connection pool from app.js

// Function to get all users
const getAllUsers = async () => {
  try {
    const result = await pool.query("SELECT * FROM users ORDER BY id ASC");
    return result.rows;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// Function to get a user by ID
const getUserById = async (id) => {
  try {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return result.rows[0];
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw error;
  }
};

// Function to create a new user
const createUser = async (userData) => {
  const { name, email } = userData;
  try {
    const result = await pool.query(
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
      [name, email]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

// Function to update a user
const updateUser = async (id, userData) => {
  const { name, email } = userData;
  try {
    const result = await pool.query(
      "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
      [name, email, id]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

// Function to delete a user
const deleteUser = async (id) => {
  try {
    await pool.query("DELETE FROM users WHERE id = $1", [id]);
    return { message: "User deleted successfully" };
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
