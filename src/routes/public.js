const publicRoute = require('express').Router();
const path = require("node:path")
const a = 10;
function test() {
    console.log("This is a test function");
}

publicRoute.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, "../", "views", "index.html"));
})

publicRoute.get("/about", (req, res) => {
    res.json({
        message: "This is the about page"
    })
})
module.exports = {
    a,
    test,
    publicRoute
}