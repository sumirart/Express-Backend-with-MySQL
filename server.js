// importing module and making default value
const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    // mysql = require('mysql'),
    app = express(),
    port = process.env.PORT || 3000; //use default port in server (cloud) or 3000


// use module
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());




// ROUTES ---------------------------
// GET ALL NOTES
app.get('/notes', (req, res) => {
    connection.query('SELECT * FROM `notes`', function (err, results, fields) {
        if (err) {
            console.log(err);
        } else {
            res.send(results);
        }
    })
})

// // GET NOTE BY ID
// app.get('/notes/:id', function (req, res) {
//     connection.query('SELECT * FROM `notes` WHERE `id` = ?', req.params.id, function (err, results) {
//         if (err) {
//             console.log(err);
//         } else {
//             res.send(results);
//         }
//     });
// });

// // POST NOTE
// app.post('/notes', function (req, res) {
//     const { id, text, date } = req.body;
//     connection.query('INSERT INTO `notes` (id, text, date) values (?, ?, ?)', [id, text, date], function (err, results) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log('Success adding note!');
//             res.send(req.body);
//         }
//     });
// });

// UPDATE A NOTE
app.put('/notes/:id', function (req, res) {
    const { text, date } = req.body;
    connection.query('UPDATE `notes` SET text = ?, date = ? WHERE id = ?', [text, date, req.params.id], function (err, results) {
        if (err) {
            console.log(err);
        } else {
            console.log('Success updating note with id = ' + req.params.id);
            res.send(req.body);
        }
    })
});

// DELETE A NOTE
app.delete('/notes/:id', function (req, res) {
    connection.query('DELETE FROM `notes` WHERE `id` = ?', req.params.id, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Success delete note with id = ' + req.params.id);
            res.send(req.body);
        }
    })
})

// LISTEN PORT
app.listen(port, () => {
    console.log('Server REST MySQL now starting on port: ' + port);
});