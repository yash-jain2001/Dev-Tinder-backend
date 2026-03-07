const express = require("express");
const connectDB = require("./config/database.js");
const app = express();

connectDB()
  .then(() => {
    console.log("Database connected")
    app.listen(3000, () => {
      console.log("Server started on port 3000");
    });
  })
  .catch((err) => {
    console.log("db not connected", err)
  });

