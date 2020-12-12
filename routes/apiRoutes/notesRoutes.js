const router = require('express').Router();

const notes = require('../../db/db.json');
const { createNote } = require ('../../lib/notes');

router.get('/notes', (req, res) => {
    let results = notes;

    res.json(results);
    console.log(results)
});

router.post('/notes', (req, res) => {
    //add id to note (add 1 to last value)
    req.body.id = notes.length.toString();

    const note = createNote(req.body, notes);
    
    res.json(note);
});

module.exports = router;