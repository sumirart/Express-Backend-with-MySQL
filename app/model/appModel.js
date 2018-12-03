'use strict';
const sql = require('./db.js');

// Note object constructor
const Note = function (note) {
    this.id = note.id;
    this.text = note.text;
    this.date = note.date;
};

Note.createNote = function createNote(newNote, result) {
    sql.query("INSERT INTO `notes` SET ?", newNote, function (err, res) {
        if (err) {
            console.log("error createNote: " + err);
            result(err, null);
        } else {
            console.log('Success adding note!');
            result(null, res.insertId)
        }
    });
};

Note.getNoteById = function createNote(noteId, result) {
    sql.query('SELECT * FROM `notes` WHERE `id` = ?')
}

// GET NOTE BY ID
app.get('/notes/:id', function (req, res) {
    connection.query('SELECT * FROM `notes` WHERE `id` = ?', req.params.id, function (err, results) {
        if (err) {
            s
            console.log(err);
        } else {
            res.send(results);
        }
    });
});