'use strict';

const Note = require('../model/appModel.js');

exports.create_a_note = function (req, res) {
    const new_note = new Note(req.body);

    //handles null error
    if (!new_note.text) {
        res.status(400).send({ error: 'Please provide text for note' });
    } else {
        Note.createNote(new_note, function (err, note) {
            if (err)
                res.send(err);
            res.json(note);
        });
    }
};