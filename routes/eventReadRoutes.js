let express = require('express');
let db = require('../db');
let router = express.Router();


router.get('/events/:venueid', (req, res) => {

    let venueid = req.params.venueid;

    db.query("SELECT * FROM events WHERE venuid = " + venueid, (err, result) => {

        if (err) {

            res.sendStatus(503);
        }

        if (result) {
            res.json(result);
        }

    });


});

module.exports = router;

