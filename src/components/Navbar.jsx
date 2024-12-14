
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



const Navbar = () => {
    return (
        <header className="bg-dark text-white py-2">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <span className="fs-4 fw-bold">FC.</span>
                </div>
                <nav className="d-flex justify-content-center w-100">
                    <Link to="/" className="text-white text-decoration-none me-3">Inicio</Link>
                    <Link to="/acercaDe" className="text-white text-decoration-none me-3">Acerca de</Link>
                    <Link to="/servicios" className="text-white text-decoration-none me-3">Servicios</Link>
                    <Link to="/historia" className="text-white text-decoration-none me-3">Historia</Link>
                </nav>
                <div className="d-flex">
                    <Link to="/registeruser" className="btn btn-warning text-white me-2">Registrar</Link>
                    <Link to="/loginsesion" className="btn btn-secondary text-white">Iniciar</Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
