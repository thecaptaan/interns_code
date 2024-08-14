"use strict";
require("dotenv").config();
const path = require("node:path");
const express = require("express");
const database = require("./src/utils/mongoose");
const server = express();

// middleware
server.use(express.json());
server.use(express.urlencoded({ extended: true }))

server.use((req, res, next) => {
    res.setHeader("X-Powered-By", "Xorblin Digital Pvt. Ltd.");
    next();
})

const publicRoute = require("./src/routes/public");
const publicController = require("./src/controllers/publicController")
const userCreate = require("./src/controllers/createUser");

server.use(publicRoute);
server.use(publicController);
server.use(userCreate);

server.listen(process.env.PORT, () => {
    console.log(`Sever is listing ${process.env.PORT}`);
})
