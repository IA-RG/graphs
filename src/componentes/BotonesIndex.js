import React, { useState } from 'react';

const BotonesIndex = () => {
    return (
        <div className="d-flex">
            <div className="navbar-nav">
                <a data-bs-toggle="modal" data-bs-target="#logInModal" className="nav-link" href="#">Iniciar Sesion</a>
                <a data-bs-toggle="modal" className="nav-link" data-bs-target="#signInModal" href="#">Registrarse!</a>
            </div>
        </div>
    );
};

export default BotonesIndex;