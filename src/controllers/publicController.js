const publicRoute = require("express").Router();

publicRoute.post("/", (req, res, next) => {
    console.log("Post request received");
    console.log(req.body);
    res.json({
        message: "Post request received"
    })

})

module.exports = publicRoute;