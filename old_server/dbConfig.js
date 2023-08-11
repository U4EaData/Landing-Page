// Pool of open connections
const { Pool } = require("pg");
require("dotenv").config();

const connectionString = `postgresql://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWROD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`;

const pool = new Pool({
  connectionString: connectionString,
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  password: process.env.DATABASE_PASSWROD,
  user: process.env.DATABASE_USER,
  port: process.env.DATABASE_PORT,
});

module.exports = pool;
