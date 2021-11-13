const mysql = require('mysql');

const config = {
    host: 'localhost',
  	port: '3306',
  	user: 'root',
  	password: 'Qwerty123*321',
  	database: 'Hotel_Mascota'
};

const connection = mysql.createConnection(config);
module.exports = connection;
// module.exports = connection;
