let express = require('express');
let db = require('../db');
let router = express.Router();


router.get('/events/:venueid', (req, res) => {


    let venueid = req.params.venueid;

    db.query("SELECT * FROM events WHERE venuid = " + venueid, (err, result) => {

        if (err) {
            console.log("The entry could not be retrieved");
            console.log(err);
            res.status(404).send("Something went wrong");
        }

        if (result) {
            console.log("The data retrieval was successful");
            res.json(result);
        }

    });


});

module.exports = router;

