'use strict';
const mysql = require('mysql'),

// initialize mysql connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbnotes'
});
connection.connect(err => {
    if (err) throw err;
})

module.exports = connection;