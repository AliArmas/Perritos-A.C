//requerimientos
const express = require('express');
const app  = express();
const morgan = require('morgan');
require('dotenv').config();
const rapidash = require('connect-flash');

//settings
app.set('port',process.env.PORT || 3000 );
app.set('json spaces', 2);

//api URL
app.set('url', '/api/v1/');
app.set('urlAd','/admin/');

//motor de plantilla
app.set('view engine','ejs');
 
//carpetas estaticas 
app.set('views',__dirname + '/views'); 
app.use(express.static(__dirname + '/public'))

//midelwares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(rapidash());

//rutas de pagina 
app.use(require('./routes/index'));
app.use(`${app.get('url')}mascota`,require('./routes/Mascotas/mascota'));
app.use(`${app.get('url')}users`,require('./routes/users/user'));
//rutas de administrador
app.use("/dashboard",require('./routes/admin/admin'));
app.use("/users",require("./routes/users/user"));
app.use("/cats",require("./routes/cats/cat"));
app.use("/dogs",require("./routes/dogs/dog"));
//ERROR 404
app.use((req,res, next) => {
    res.status(404).sendFile(__dirname+"/views/pages/404.html");
    next();
});
//iniciar el servidor
app.listen(`${app.get('port')}`, () => {
    console.log(`Server is listening on port ${app.get('port')}`);   
});

 

