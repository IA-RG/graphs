import React, {useState} from 'react';
import FormularioSignIn from './componentes/FormularioSignIn';
import Header from './componentes/Header';
import ModalLogIn from './componentes/ModalLogIn';
import ModalSignIn from './componentes/ModalSignIn';


const App = () => {
	const [session, setSession] = useState(false);
	return (
		<div>
			<Header 
			sesion={session} />
			<ModalSignIn />
			<ModalLogIn />
		</div>
	);
}

export default App;