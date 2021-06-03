import React, { useState, useEffect } from 'react';
import FormularioSignIn from './FormularioSignIn';

const ModalSignIn = () => {
    return (
        <div id="signInModal" className="modal" tabIndex="-1">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header bg-dark">
                        <h1 className="modal-title text-white">Registro</h1>
                    </div>
                    <div className="modal-body text-center">
                        <FormularioSignIn />
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

export default ModalSignIn;