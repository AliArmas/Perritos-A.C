SELECT * FROM Usuario;

/*
Sentencias para la base de datos para obtencion de datos sobre las tablas Usuario y de perros
*/
SELECT Usuario.nombre, Usuario.telefono, Perro.nombre,Perro.raza FROM Perro JOIN Usuario ON Perro.idPerro=Usuario.idUsuario
SELECT * FROM Usuario inner join Perro on Usuario.idUsuario = Perro.idPerro