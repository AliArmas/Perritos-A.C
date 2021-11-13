const { Router } = require('express');
const connection  = require('../../data/db');
const router = Router();

//validators
const { body, validationResult } = require('express-validator');


router.get('/', function(req, res,) {
    connection.query('SELECT Usuario.nombre, Usuario.telefono, Perro.nombre,Perro.raza FROM Perro JOIN Usuario ON Perro.idPerro=Usuario.idUsuario', function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
    //res.json(data);
});
//
router.post('/',body('email').isEmail(),body('telefono').isLength({ min: 10 }),(req,res) => {
    //res.json(req.body.name);
    // res.json(req.body.telefono);
    // res.json(req.body.email);
    var sql = "INSERT INTO Usuario (idUsuario,name,telefono,email) VALUES ('" + req.body.name + "', '" + req.body.telefono + "','" + req.body.email + "'))";
    
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }else{ 
        console.log(req.body);
        res.send("logueado");
    }    
});
router.delete('/:id',(req,res) => {
    res.json("eliminando");
});

router.put('/:id', (req,res)=>{
    res.send("actualizando");
});
module.exports = router;