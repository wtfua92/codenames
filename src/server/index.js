"use strict";
exports.__esModule = true;
var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors);
app.listen(3001, "localhost", function () {
    console.log("Server connected");
});
exports["default"] = app;
