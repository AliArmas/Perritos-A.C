const { Router } = require('express');
const router = Router();
const connection = require('../../data/db');
//validators
const { body, validationResult } = require('express-validator');

router.get('/', function(req,res){
    connection.query('SELECT * FROM Usuario', function (error, results, fields) {
        if (error) throw error;
        res.json(results)
        return results;
    });
}); 
//body('email').isEmail(),body('telefono').isLength({ min: 10 }),
router.post('/',(req,res) => {
    var sql = "INSERT INTO Usuario (nombre,telefono,email) VALUES ('" + req.body.name + "', '" + req.body.telefono + "','" + req.body.email + "')";
    const data = JSON.stringify(req.body);
    //const errors = validationResult(req);
    connection.query(sql, function(error, results, fields){
        if(error) throw error;
        return res.send({error:false, message: 'Post Created'});
 
    });   
    console.log(req.body);
    res.send("logueado");
    console.log("data_:",data) 
});

 
router.delete('/(:id)',(req,res) => {
    var sql=  `DELETE FROM Usuario WHERE idUsuario =`+req.body.id
    connection.query(sql,[id],function(error, results, fields){
        if(error) throw error;
        return res.send({error:false, message: 'eliminado'});
    });  
    res.json("eliminando res");
}); 

router.put('/id', (req,res)=>{
    res.send("actualizando");
});

router.get('/', )
module.exports = router;