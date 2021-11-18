const { Router } = require('express');
const router = Router();
const connection = require('../../data/db');
//validators
const { body, validationResult } = require('express-validator');

router.get('/', function(req, res,) {
    connection.query('SELECT * from Perro', function (error, results, fields) {
        if (error) throw error;
    });
    //res.json(data);
});

router.post('/',(req,res) => {
    console.log(req.body);
    res.send("resivido");
});
router.delete('/:id',(req,res) => {
    res.json("eliminando");
});

router.put('/', (req,res)=>{
    res.send("actualizando");
});
module.exports = router;