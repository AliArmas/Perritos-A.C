const mysql = require('mysql');
require('dotenv').config();
const { promisify} = require('util')

const conf = {
    host: 'localhost',
  	port: '3306',
  	user: 'root',
  	password: 'Qwerty123*321',
  	database: 'Hotel_Mascota'
};

const connection = mysql.createConnection(conf);


module.exports = connection;
// module.exports = connection;
