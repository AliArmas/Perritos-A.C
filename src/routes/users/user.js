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
    const { nombre, email,telefono } = req.body;
    const newUsuario = {
        nombre,
        email,
        telefono,
    }
    connection.query("INSERT INTO Usuario set ?",[newUsuario],function(error, results, fields){
        if(error) throw error;
        return res.send({error:false, message: 'Post Created'});
    });    
});

router.post('/post', (req,res) =>{

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

module.exports = router;