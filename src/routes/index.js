const { Router, application } = require('express');
const router = Router();


//RUTAS PARA EL MANEJO DE VISTAS
router.get('/',(req,res) => {
    res.render('index');
});
router.get('/cats',(req,res) => {
    res.render('cats');
});
router.get('/dogs',(req,res) => {
    res.render('dogs',);
});
router.get('/registro',(req,res) =>{
    res.render('register');
});
router.get('/promociones',(req,res) => {
    res.render('landing');
});
  

module.exports = router;