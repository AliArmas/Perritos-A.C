const { Router } = require('express');
const router = Router();
const connection = require('../../data/db');
//validators
const { body, validationResult } = require('express-validator');

router.get('/', function(req, res,) {
    connection.query('SELECT * from Mascota', function (error, results, fields) {
        if (error) throw error;
        res.json(results)
    }); 
});

router.post('/',(req,res) => {
    const { nombreM,tipoMascota,raza,peso,status,estatura,Usuario_idUsuario } = req.body;
    const newMascota = {
        nombreM,
        tipoMascota,
        raza,
        peso,
        status,
        estatura,
        Usuario_idUsuario
    }
    connection.query("INSERT INTO Mascota set ?",[newMascota],function(error, results, fields){
        if(error) throw error;
    });
});

router.delete('/:id',(req,res) => {
    res.json("eliminando");
});

router.post('/:id', (req,res)=>{
    res.send("actualizando");
});
module.exports = router;