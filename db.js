let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hello1234',
    database: 'jazzhub'
});

connection.connect((err) => {

    if (err) {
        console.log("Database connection unsuccessful");
    } else {
        console.log("Database connection was successful");
    }
});

module.exports = connection;