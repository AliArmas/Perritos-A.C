//requerimientos
const express = require('express');
const app  = express();
const morgan = require('morgan');

//settings
app.set('port',process.env.PORT || 3000);
app.set('json spaces', 2);

//api URL
app.set('url', '/api/v1/');

//motor de plantilla
app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');
app.use(express.static(__dirname + '/public'))

//midelwares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//rutas
app.use(require('./routes/index'));
app.use(`${app.get('url')}cats`,require('./routes/cats/cat'));
//app.use('/db',require('./data/db'));
app.use(`${app.get('url')}users`,require('./routes/users/user'));
app.use(`${app.get('url')}dogs`,require('./routes/dogs/dog'));

//ERROR 404
app.use((req,res, next) => {
    res.status(404).sendFile(__dirname+"/views/pages/404.html");
});
//iniciar el servidor
app.listen(3000, () => {
    console.log(`Server is listening on port ${app.get('port')}`);   
});



