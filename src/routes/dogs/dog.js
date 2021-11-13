const { Router } = require('express');
const router = Router();
const connection = require('../../data/db');
//validators
const { body, validationResult } = require('express-validator');

router.get('/', function(req, res,) {
    connection.query('SELECT * from Perro', function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
    //res.json(data);
});

router.post('/',body('email').isEmail(),body('password').isLength({ min: 8 }),(req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }else{ 
        console.log(req.body);
        res.send("resivido");
    }    
});
router.delete('/:id',(req,res) => {
    res.json("eliminando");
});

router.put('/:id', (req,res)=>{
    res.send("actualizando");
});
module.exports = router;