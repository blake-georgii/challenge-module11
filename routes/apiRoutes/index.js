const path = require('path');
const fs = require("fs");
const router = require('express').Router();
const notes = require('../../db/db.json');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.get('/notes:id', (req, res) => {
    res.json(notes);
});

router.delete('/notes/:id', (req, res) => {
    let newNotes = notes;

    indexOfNote = newNotes.findIndex(function name(x) {
        return x.id == req.params.id;
    });

    newNotes.splice(indexOfNote, 1);

    fs.writeFileSync(
        path.join(__dirname, "../../db/db.json"),
        JSON.stringify(newNotes)
    );

    res.json(notes);
});

router.post('/notes', (req, res) => {
    req.body.id = Math.floor(Math.random() * 1000000);
    notes.push(req.body);

    fs.writeFileSync(
        path.join(__dirname, "../../db/db.json"),
        JSON.stringify(notes)
    );
    res.json(notes);
});

module.exports = router;