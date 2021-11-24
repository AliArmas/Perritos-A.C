const { Router, application } = require('express');
const router = Router();


//RUTAS PARA EL MANEJO DE VISTAS
router.get('/',(req,res) => {
    res.render('index');
});
router.get('/registro',(req,res) =>{
    res.render('register');
});
router.get('/promociones',(req,res) => {
    res.render('landing');
});

module.exports = router;