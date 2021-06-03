import React, { useState, useEffect } from 'react';
import FormularioLogIn from './FormularioLogIn';

const ModalLogIn = () => {
    return (
        <div id="logInModal" className="modal" tabIndex="-1">
            <div className="modal-dialog modal-md">
                <div className="modal-content">
                    <div className="modal-header bg-dark">
                        <h1 className="modal-title text-white">Iniciar Sesión</h1>
                    </div>
                    <div className="modal-body text-center">
                        <FormularioLogIn />
                    </div>
                    <div className="modal-footer text-center">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        <input type="submit" className="btn btn-dark" value="Enviar" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalLogIn;