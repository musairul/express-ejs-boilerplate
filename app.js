const express = require("express");
const path = require("path");
const { Pool } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// PostgreSQL connection pool
const pool = new Pool({
  host: process.env.DATABASE_SERVER,
  user: process.env.DATABASE_USER,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: 5432,
});

// Middleware
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);

const indexRoutes = require("./routes/index");
app.use("/", indexRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on  http://localhost:${port}`);
});

module.exports = { pool };
