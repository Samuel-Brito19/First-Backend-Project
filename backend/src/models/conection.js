const mysql = require('mysql2/promise')

const connection = mysql.createPool({
    host: 'localhost',
    username: 'root',
    password: 'root',
    database: 'todolist'


})

module.exports = connection