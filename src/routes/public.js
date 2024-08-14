const publicRoute = require('express').Router();
const path = require("node:path")


publicRoute.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, "../", "views", "index.html"));
})

publicRoute.get("/about", (req, res) => {
    res.json({
        message: "This is the about page"
    })
})
module.exports = publicRoute