const { Router } = require('express');
const router = Router();

const data = require('./samples.json');

router.get('/',(req,res) => {
    res.render('index');
});
router.get('/cats',(req,res) => {
    res.render('cats');
});
router.get('/dogs',(req,res) => {
    res.render('dogs');
});
router.get('/promociones',(req,res) => {
    res.render('promo');
});



module.exports = router;