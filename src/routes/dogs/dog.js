const { Router } = require('express');
const router = Router();
const connection = require('../../data/db');

router.get('/',function (req,res){
    connection.query("SELECT * FROM Mascota WHERE tipoMascota = 'perro' OR 'Perro'", function (error,results, fields){
        res.render('dogs',{results})
    }) 
});

module.exports = router;