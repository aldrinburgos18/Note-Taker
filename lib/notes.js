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
    return new Promise((resolve, reject) => {
        fs.readFile('./db/db.json', (err, data) => {
            if (err) throw err;
            const notesData = JSON.parse(data);
            let newNotesArr = notesData.filter((note) => {
                return id !== note.id;
            })
            fs.writeFile('./db/db.json', JSON.stringify(newNotesArr, null, 2), (err) => {
                if(err) {
                    reject(err);
                } resolve(newNotesArr);
            });
        });
    })
}

module.exports = { createNote, deleteNote };