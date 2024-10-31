const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'http://localhost/phpmyadmin/index.php?route=/database/structure&db=todolist-app',
    user: 'root',
    password: '1234',
    database: 'todolist-app'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to MySQL database.');
});

module.exports = db;