const { Router } = require('express');
const router = Router();
const connection = require('../../data/db');

router.get('/',function (req,res){
    connection.query("SELECT * FROM Mascota WHERE tipoMascota = 'gato' OR 'Gato'", function (error,results, fields){
        res.render('cats',{results})
    }) 
});

module.exports = router;