"use strict";

const express = require("express");
const app = express();

app.set("view engine", "pug");

// Use the built-in express middleware for serving static files from './public'
app.use("/static", express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

// Start the server
const PORT = parseInt(process.env.PORT) || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log("Press Ctrl+C to quit.");
});

// [END gae_flex_node_static_files]
module.exports = app;
