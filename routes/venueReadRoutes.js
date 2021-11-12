let express = require('express');
let db = require('../db');
let router = express.Router();

router.get('/venues', (req, res) => {

    db.query("SELECT * FROM venues", (err, result) => {


        if (err) {
            console.log("Something went wrong with the database");
            res.send("Something went wrong");
        }

        if (result) {
            console.log("The database retrieval was successful");

            res.json(result);
        }

    });


});

router.get('/venues/:id', (req, res) => {

    let id  = req.params.id;


    db.query("SELECT * FROM venues WHERE id = " + id, (err, result) => {


        if (err) {
            console.log("The entry could not be retrieved");
            console.log(err);
            res.statusCode(404);
        }

        if (result) {
            console.log("Finding the entry was successful");
            res.json(result);
        }

    });
});


router.get('/venues/:id/fulldetails', (req, res) => {

    let id = req.params.id;

    db.query(`
    SELECT venues.name as venueName, 
    venues.address as venueAddress, 
    venues.imageUrl as venueImage, 
    venues.websiteUrl as venueWebsite,
    events.name as eventName,
    events.imageUrl as eventImage,
    events.date as eventDate
    FROM venues, events
    WHERE venues.id = events.venuid
    AND venues.id = ${id}`, (err, result) => {

        if (err) {
            console.log(err);
            console.log("The data could not be retrieved");
            res.sendStatus(503);
        }

        if (result) {
            console.log('The data was retrieved');
            res.json(result);
        }


    });


});

module.exports = router;
