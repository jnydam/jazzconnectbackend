var express = require('express');
let db = require('../db');
var router = express.Router();


router.post("/users/register", (req, res) => {


    let userObject = req.body;

    console.log("Here is the user");

    console.log(userObject);

    db.query("INSERT INTO users set ?", userObject, (err, result) => {

        if (err) {
            console.log(err);
            console.log("Something went wrong");
            res.sendStatus(503);
        }

        if (result) {
            console.log(result);
            console.log("Everything is ok");
            res.sendStatus(200);
        }

    });



});


module.exports = router;