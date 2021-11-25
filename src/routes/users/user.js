const { Router } = require('express');
const router = Router();
const connection = require('../../data/db');
//validators  
const { body, validationResult } = require('express-validator');

router.post('/',(req,res) => {
    const { nombre, email,telefono,plan} = req.body;
    const newUsuario = {
        nombre,
        email,
        telefono,
        plan
    }
    connection.query("INSERT INTO Usuario set ?",[newUsuario],function(error, results, fields){
        if(error) throw error;
    });    
});

router.get('/',function (req,res){
    connection.query("SELECT * FROM Usuario", function (error,results, fields){
        res.render('users',{results})
    }) 
});
router.delete('/:id',(req,res) => {
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