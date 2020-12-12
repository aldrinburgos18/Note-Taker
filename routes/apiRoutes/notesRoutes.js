const router = require('express').Router();

const notes = require('../../db/db.json');
const { createNote, deleteNote } = require ('../../lib/notes');

//get notes from json
router.get('/notes', (req, res) => {
    let results = notes;

    res.json(results);
});

//add notes to json
router.post('/notes', (req, res) => {
    //add id to note (add 1 to last value)
    req.body.id = notes.length.toString();

    const note = createNote(req.body, notes);
    
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;

    const note = deleteNote(id);

    res.json(note);
});

module.exports = router;