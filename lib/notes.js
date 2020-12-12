const fs = require('fs');
const path = require('path');

function createNote(body, noteEl) {
    const note = body;

    //add to json file
    noteEl.push(note);

    //write to json file
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(noteEl, null, 2)
    );
    
    return note;
};

module.exports = { createNote };