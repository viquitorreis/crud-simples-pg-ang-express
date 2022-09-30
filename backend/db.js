const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'name',
    password: 'banco1234',
    port: '5432'
})

module.exports = pool