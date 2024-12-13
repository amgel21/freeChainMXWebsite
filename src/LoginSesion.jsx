import React from 'react';
import './LoginSesion.css';

const LoginSesion = () => {
    return (
        <div>
            <header className="bg-dark text-white py-2">
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <span className="fs-4 fw-bold">FC.</span>
                    </div>
                    <nav className="d-flex justify-content-center w-100">
                        <a href="index.html" className="text-white text-decoration-none me-3">Inicio</a>
                        <a href="acercaDe.html" className="text-white text-decoration-none me-3">Acerca de</a>
                        <a href="Servicios.html" className="text-white text-decoration-none me-3">Servicios</a>
                        <a href="Historia.html" className="text-white text-decoration-none me-3">Historia</a>
                    </nav>
                </div>
            </header>

            <div className="imagen-fondo"></div>

            <div className="form-container" id="firstFormContainer">
                <h2>Completa los siguientes campos</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="ejemplo@dominio.com" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Contraseña</label>
                        <input type="password" id="address" name="address" required />
                    </div>
                </form>
                <div className="text-center">
                    <p><a href="#">Recuperar cuenta</a></p>
                </div>
            </div>

            <footer className="bg-dark text-white text-center py-4 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h5>FC. Mercado</h5>
                            <p>A108 Adam Street, New York, NY 535022</p>
                            <p>Teléfono: +1 5589 55488 55</p>
                            <p>Correo electrónico: info@example.com</p>
                        </div>
                        <div className="col-md-6">
                            <h5>Enlaces útiles</h5>
                            <ul className="list-unstyled">
                                <li><a href="index.html" className="text-white text-decoration-none">Inicio</a></li>
                                <li><a href="Servicios.html" className="text-white text-decoration-none">Servicios</a></li>
                                <li><a href="terminosServicio.html" className="text-white text-decoration-none">Términos del servicio</a></li>
                                <li><a href="politicaPrivacidad.html" className="text-white text-decoration-none">Política de privacidad</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-12">
                            <p>&copy; Copyright FC. Mercado - Todos los derechos reservados</p>
                            <p>Diseñado por FC.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LoginSesion;
