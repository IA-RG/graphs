import React, {useState} from 'react';
import {Formulario, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from './Formularios';
import Input from './Input';

const FormularioSignIn = () => {
    const [nombre, cambiarNombre] = useState({campo: '', valido: null});
	const [password, cambiarPassword] = useState({campo: '', valido: null});
	const [correo, cambiarCorreo] = useState({campo: '', valido: null});
	const [formularioValido, cambiarFormularioValido] = useState(null);

	const onSubmit = (e) => {
		e.preventDefault();

		if(
			nombre.valido === 'true' &&
			password.valido === 'true' &&
			correo.valido === 'true' 
		){
			cambiarFormularioValido(true);
			cambiarNombre({campo: '', valido: null});
			cambiarPassword({campo: '', valido: null});
			cambiarCorreo({campo: '', valido: null});
			// ... 
		} else {
			cambiarFormularioValido(false);
		}
	}

	return (
        <main>
            <Formulario action="" onSubmit={onSubmit}>
                <Input
                    estado={nombre}
                    cambiarEstado={cambiarNombre}
                    tipo="text"
                    label="Nombre"
                    placeholder="Escriba su nombre"
                    name="usuario"
                    leyendaError="El nombre solo puede contener letras y espacios."
                />
                <Input
                    estado={password}
                    cambiarEstado={cambiarPassword}
                    tipo="password"
                    label="Contraseña"
                    placeholder="Escriba una contraseña"
                    name="password1"
                    leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
                />
                <Input
                    estado={correo}
                    cambiarEstado={cambiarCorreo}
                    tipo="email"
                    label="Correo Electrónico"
                    placeholder="Ejemplo@correo.com"
                    name="correo"
                    leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
                />
                
            </Formulario>
        </main>

	);
};

export default FormularioSignIn;