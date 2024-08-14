"use strict";
require("dotenv").config();
const path = require("node:path");
const express = require("express");

const server = express();

// middleware
server.use(express.json());
server.use(express.urlencoded({ extended: true }))


const { a, test, publicRoute } = require("./src/routes/public");
const publicController = require("./src/controllers/publicController")
console.log(a);
test();
server.use(publicRoute);
server.use(publicController);




server.listen(process.env.PORT, () => {
    console.log(`Sever is listing ${process.env.PORT}`);
})
