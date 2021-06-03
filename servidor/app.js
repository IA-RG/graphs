//Archivo encargado de ejecutar todo el servidor
/*
Nodemon reinicia el servidor cada vez que hay un cambio

*/
const express = require('express');
const path = require('path'); //Modulo path que une los directorios
const app = express(); //Modulo express
const morgan = require('morgan'); //Modulo morgan
const mysql = require('mysql'); //Modulo de MySQL
const myConnection = require('express-myconnection'); //Conexion a la base

//Importando rutas
const ususarioRutas = require('./rutas/usuario');
const { urlencoded } = require('express');

//Configuracion
app.set('port', process.env.PORT || 3000); //Revisa si hay un puerto en el SO o usa el puerto 3000
app.set('view engine', 'ejs'); //Configuramos el motor de platillas de ejs
app.set('views', path.join(__dirname, 'views')); //dirname me da la ruta del archivo desde donde se ejecuta

//Middlewares: Funciones que se ejecutan antes de las peticiones de los usuarios 
//Registrando las peticiones que llegan usando morgan
app.use(morgan('dev')); //Muestra mensajes en consola de las solicitudes

//Configuracion de acceso a la base de datos
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '1234',
    port: 3306,
    database: 'proyecto'
}, 'single'))

//Desde el modulo de express estamos requiriendo un metodo que nos permita entender los datos que vienen del formulario
app.use(express.urlencoded({extended: false}));//Envia los datos del formulario pues
//Rutas
app.use('/', ususarioRutas);//Cada vez que un ususario llega a la ruta inicial del servidor se ejecuta

//Archivos estaticos 
app.use(express.static(path.join(__dirname, 'public')));

//Iniciando el servidor
app.listen(app.get('port'), () => {
    console.log('Ejecutando server en puerto 3000');
});