//Aqui vamos a colocar todas las rutas del servidor que va a poder manejar
const express = require('express');
const router = express.Router(); //Metodo router devuelve un objeto de JS en el cual le puedo agregar rutas para reutilizarlo
const usuarioControladores = require('../controladores/usuarioControladores');//Accedo al contenido de usuarioControladores.js

router.get('/', usuarioControladores.list); //Reemplaza todo lo que este adentro por lo que esta en list.
router.post('/add', usuarioControladores.save); //Guarda los datos del usuario ingresado
router.get('/delete/:id', usuarioControladores.delete); //Elimina el usuario mediante el parametro de la ruta
router.get('/update/:id', usuarioControladores.edit); //Edita al usuario mediante el parametro de su ruta
router.post('/update/:id', usuarioControladores.update); //Actualiza los datos

module.exports = router;