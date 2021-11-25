const { Router } = require('express');
const router = Router();
const connection = require('../../data/db');

router.get('/',function (req,res){
    connection.query("SELECT * FROM Mascota left join Usuario on idMascota = idUsuario", function (error,results, fields){
        res.render('admin',{results})
    }) 
});
router.get('/edit/:id', function(req,res){
    const { id } = req.params
    connection.query("SELECT * FROM Mascota WHERE idMascota = ?",id, function(error,results){
        res.render('edit',{
            data : results[0]
        })
    })
    console.log("id:",id)

    // connection.query("UPDATE FROM Mascota SET status = ? WHERE idMascotA  = ?",status,id,function(error){
    //     if(error) throw error;
    //     return res.redirect('admin');
    // })
});

 
router.get('/delete/:id', function(req,res){ 
    const { id } = req.params
    console.log(id) 
    connection.query("DELETE FROM Mascota WHERE idMascota  = ?",id,function(error){
        if(error) throw error;
        return res.redirect('/admin');
    })
}) 
 

module.exports = router;
