const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const createUser = require('express').Router();

createUser.post('/create/user', (req, res) => {
    const { fullName, username, email, password } = req.body;
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            res.status(500).json({
                error: "Internal Server Error"
            })
        }
        else {
            userModel.create({
                fullName,
                username,
                email,
                password: hash
            }).then(data => {
                res.status(201).json({
                    message: "User Created Successfully",
                    data
                })
            }).catch(err => {
                res.status(500).json({
                    error: "Internal Server Error"
                })
            })
        }

    })
})

module.exports = createUser;