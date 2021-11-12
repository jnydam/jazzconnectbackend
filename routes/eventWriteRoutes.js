var express = require('express');
let db = require('../db');
let scullersDemo = require('../demojson/scullersdemo');
const processBodyToDoubleArray = require('../services/eventRoutesService');
var router = express.Router();


router.post('/events/:venueid', (req, res) => {

    console.log("this is the venue id");
    let id = req.params.venueid;
    console.log(id);

    console.log("This will be the request body");
    console.log(req.body);

    let demoEvents = req.body;

    let doubleArrayResult = processBodyToDoubleArray(demoEvents, id);

    console.log("This is the double array result");

    console.log(doubleArrayResult);

    db.query("DELETE FROM events WHERE venuid = " + id, (errOne, resultOne) => {

        if (errOne) {
            console.log(errOne);
            console.log("Something went wrong");
        }

        if (resultOne) {


            db.query("INSERT INTO events (id, name, imageUrl, date, venuid) VALUES ?", 
            [doubleArrayResult], (errTwo, resultTwo) => {
    
                if (errTwo) {
                    console.log(err);
                    console.log("There was an error inserting into the database");
                }
        
                if (resultTwo) {
        
                    console.log("The insertion was successful");
                    res.send("This was pinged!");
        
                }
    
            });


        }


    });


    

});


module.exports = router;