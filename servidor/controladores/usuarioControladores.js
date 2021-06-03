//Creando lista de controladores
const controller = {};

//Metodo que lista
controller.list = (req, res) => {
    //res.send('Holi UwU');
    req.getConnection((err, conn) => {
        conn.query('SELECT *FROM usuario', (err, usuarios) => {
            if(err){
                res.json(err);
            }
            //console.log(usuarios);
            res.render('usuarios', {
                data: usuarios
            });
        });
    });
};

//Metodo que se encarga de recibir datos
controller.save = (req, res) => {
    const data = req.body;
    //console.log(data);
    //res.send('Datos enviados')
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO usuario set ?', [data], (err, usuario) => {
            //console.log(usuario);
            //res.send('Inserto chido, con todo, soy muy bueno WOHHHHHHHHHHH')
            res.redirect('/'); //Redireccionando a la ruta inicial del servidor
        });
    });
};

//Metodo que edita los datos
controller.edit = (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT *FROM usuario where id = ?', [id], (err, usuario) => {
            //console.log(usuario); //Estaba obteniendo un arreglo lol
            res.render('usuario_actualizado', {
                data: usuario[0]
            });
        });
    });
};
//Metodo que actualiza los datos
controller.update = (req, res) => {
    const {id} = req.params;
    const nuevosDatos = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE usuario set ? WHERE id = ?', [nuevosDatos, id], (err, rows) => {
            res.redirect('/');
        });
    });
};

//Metodo que se encarga de borrar datos
controller.delete = (req, res) => {
    const {id} = req.params;
    //console.log(req.params.id); //Regreso el valor de la propiedad del objeto
    //res.send('Funciona la direccion del borrado!');
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM usuario where id = ?', [id], (err, rows) => {
            res.redirect('/');
        });
    });
};

//Controlador que se encarga de responder cuando viene la ruta del servidor
module.exports = controller;