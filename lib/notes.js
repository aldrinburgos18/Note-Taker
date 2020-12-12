const fs = require('fs');
const path = require('path');

function createNote(body, noteEl) {
    //add to json file
    noteEl.push(body);

    //write to json file
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(noteEl, null, 2)
    );
    
    return body;
};

function deleteNote(id) {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);
        let newNotesArr = notes.filter((note) => {
            return id !== note.id;
        })
    fs.writeFileSync('./db/db.json', JSON.stringify(newNotesArr), (err) => {
            if (err) throw err;
            
        });
    });
}

module.exports = { createNote, deleteNote };