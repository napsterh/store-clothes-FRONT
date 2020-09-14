import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/laganga.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-1">
        <Link className="navbar-brand" to="/products">
            <img src={logo} alt="La Ganga Logo" width="150"/>
        </Link>
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/products">
                    Inicio
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/products-form">
                    Crear productos
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/users/signin">
                    Iniciar sesión
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/users/signup">
                    Registrarse
                </Link>
            </li>
            </ul>
        </div>
        </nav>
    );
}

export default Navbar;