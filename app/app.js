const express = require("express");
const app = express();

app.use(require("./middleware"));
app.use(require("../routes/prefix"));

module.exports = app;
