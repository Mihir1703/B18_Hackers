const mysql = require('mysql')
const config = require('../app-config.json')

const DBconnect = mysql.createConnection({
    host: config.dbconfig.host,
    user: config.dbconfig.user,
    password: config.dbconfig.password,
    database:config.dbconfig.database
});

module.exports = DBconnect;