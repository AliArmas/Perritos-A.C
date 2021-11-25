const connection  = require('../../data/db');
const { Router } = require('express');
const router = Router();

router.use((req, res, next) => {
    res.header( 
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});
//objeto
const Usuario = {
    nombre:"",
    telefono:"",
    email:""
}

const userController={};
// //inicializacion de los datos mediante el formulario dado
// let nombre = document.getElementById('nombreUsuario')
// let telefono = document.getElementById('telefonoUsuario')
// let email = document.getElementById('emailUsuario')

//setters 
function setNombre(nombre){
    Usuario.nombre=nombre 
}
function setTelefono(){
    Usuario.telefono = telefono 
}
function setEmail(){
    Usuario.email = email
}


//getters
function getNombre(){
    return Usuario.nombre
}
function getTelefono(){
    return Usuario.telefono
}

function getEmail(){
    return Usuario.email
}
 
function showObjet(){
    console.log("asd",Usuario.nombre,Usuario.telefono,Usuario.email)
}

userController.list = (req,res) =>{
   
} 

module.exports = userController;