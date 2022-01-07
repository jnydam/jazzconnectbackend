var express = require('express');
let db = require('../db');
var router = express.Router();


router.post("/users/register", (req, res) => {


    let userObject = req.body;

    db.query("INSERT INTO users set ?", userObject, (err, result) => {

        if (err) {
            res.sendStatus(503);
        }

        if (result) {
            res.sendStatus(200);
        }

    });



});


module.exports = router;