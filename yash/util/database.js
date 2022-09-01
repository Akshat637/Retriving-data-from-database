const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-completed',
    password: 'AK_yadav637'
});

module.exports = pool.promise();