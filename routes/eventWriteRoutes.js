var express = require('express');
let db = require('../db');
let scullersDemo = require('../demojson/scullersdemo');
const processBodyToDoubleArray = require('../services/eventRoutesService');
var router = express.Router();


router.post('/events/:venueid', (req, res) => {

    let id = req.params.venueid;
    let demoEvents = req.body;

    let doubleArrayResult = processBodyToDoubleArray(demoEvents, id);

    db.query("DELETE FROM events WHERE venuid = " + id, (errOne, resultOne) => {

        if (errOne) {
            res.sendStatus(503);
        }

        if (resultOne) {


            db.query("INSERT INTO events (id, name, imageUrl, date, venuid) VALUES ?", 
            [doubleArrayResult], (errTwo, resultTwo) => {
    
                if (errTwo) {
                    throw errTwo;
                }
        
                if (resultTwo) {
        
                    res.send("This was pinged!");
        
                }
    
            });


        }


    });


    

});


module.exports = router;