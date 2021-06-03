import React, { useState, useEffect } from 'react';

const Header = ({sesion}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="navbar-brand">
                    <h1>graph</h1>
                </div>
                { (!sesion) ?
                    <div className="d-flex">
                        <div className="navbar-nav">
                            <a data-bs-toggle="modal" data-bs-target="#logInModal" className="nav-link" href="#">Iniciar Sesion</a>
                            <a data-bs-toggle="modal" className="nav-link" data-bs-target="#signInModal" href="#">Registrarse!</a>
                        </div>
                    </div>
                :
                <div></div>}
            </div>
        </nav>
    );
};

export default Header;