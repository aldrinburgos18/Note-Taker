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
        if (!obj.length == 0) {
            req.body.id = (parseInt(obj[obj.length -1]["id"])+1).toString();
        } else {
            req.body.id = "0"
        }
        
        res.json(createNote(req.body, obj));
        });
});

router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    deleteNote(id).then(data => {
        res.json(data);
    });
});

module.exports = router;