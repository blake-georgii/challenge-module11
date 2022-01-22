const path = require('path');
const fs = require("fs");
const router = require('express').Router();
const notes = require('../../db/db.json');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    notes.push(req.body);
    fs.writeFileSync(
        path.join(__dirname, "../../db/db.json"),
        JSON.stringify(notes)
    );
    res.json(notes);
});

module.exports = router;