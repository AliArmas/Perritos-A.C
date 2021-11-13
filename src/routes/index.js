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
    res.render('dogs', {tite: 'Perros'});
});
router.get('/registro',(req,res) =>{
    res.render('register');
});


module.exports = router;