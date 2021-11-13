const { Router } = require('express');
const router = Router();
const connection = require('../../data/db');
const mysql = require('mysql');
//validators
const { body, validationResult } = require('express-validator');

router.get('/', function(req, res, next) {
    connection.query('SELECT * from Gato', function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
    //res.json(data);
});
router.get('/cats' ,(req,res) =>{
    res.render('cat')
})
/*body('username').isEmail(),body('password').isLength({ min: 8 })
  const errors = validationResult(req);
if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }else{
        console.log(req.body);
        res.send("resivido");
    }
*/
router.post('/',(req,res) => {
    console.log(req.body);
    res.send("resivido");
});
router.delete('/:id',(req,res) => {
    res.json("eliminando");
});

router.put('/:id', (req,res)=>{
    res.send("actualizando");
});
module.exports = router;