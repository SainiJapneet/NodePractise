const dbConnect = require('./dbConnect');
const bcrypt = require('bcrypt');
const User = require('./userModel');
const express = require('express');
const app = express();
const PORT = 3000

app.post("/register",(req,res)=>{
    //hash the pswd
    bcrypt.hash(req.body.password, 10).then((hashedPassword) => {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        })

        user.save().then((result) => {
            res.status(201).send({
                message: "User was created successfully",
                result
            });
        }).catch(err => {
            res.status(500).send({
                message: "Something went wrong, user not created",
                err
            })
        })
    })

});

//executing
dbConnect();