const router = require('express').Router();
const fs = require('fs');

const { createNote, deleteNote } = require ('../../lib/notes');

//get notes from json
router.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        const obj = JSON.parse(data);
        res.json(obj)
        }) 
});

//add notes to json
router.post('/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        const obj = JSON.parse(data);
        //add id to note (add 1 to last value)
        req.body.id = obj.length.toString();
        res.json(createNote(req.body, obj));
        });
});

router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;

    deleteNote(id).then(data => {
        res.json(data);
    });
});

module.exports = router;