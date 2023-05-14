const mysql = require('mysql2/promise')

const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQ_DB


})

module.exports = connection