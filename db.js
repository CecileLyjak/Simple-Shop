const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "shop1",
    password: "hasło",
    port: 5432,
});

module.exports = pool;