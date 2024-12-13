import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LocalSesion.css';

const LocalSesion = () => {
    return (
        <div className="bg-light">
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
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Usuario
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="Perfil.html">Perfil</a></li>
                            <li><a className="dropdown-item" href="Motos.html">Motos</a></li>
                            <li><a className="dropdown-item" href="inicioSecion.html">Cerrar sesión</a></li>
                        </ul>
                    </div>
                </div>
            </header>

            <main className="contenido container my-4">
                <h2 className="text-uppercase fw-bold">Localizar</h2>

                <div className="row mt-4">
                    <div className="col-lg-8">
                        <p className="text-muted mb-2">La última ubicación registrada</p>
                        <div className="border rounded-3 overflow-hidden">
                            <img src="https://via.placeholder.com/800x400" alt="Map" className="img-fluid" />
                        </div>
                    </div>

                    <div className="col-lg-4 mt-4 mt-lg-0">
                        <div className="d-flex align-items-center mb-3">
                            <p className="mb-0">
                                <strong>Ubicación:</strong><br />
                                A108 Adam Street, New York, NY 535022
                            </p>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <p className="mb-0">
                                <strong>Llamar:</strong><br />
                                +1 5589 55488 55
                            </p>
                        </div>
                        <div className="d-flex align-items-center">
                            <p className="mb-0">
                                <strong>Email:</strong><br />
                                info@example.com
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-lg-8 offset-lg-4">
                        <form>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="Tu nombre" />
                                </div>
                                <div className="col-md-6">
                                    <input type="email" className="form-control" placeholder="Tu email" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Dirigido a:" />
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control" rows="4" placeholder="Mensaje"></textarea>
                            </div>
                            <div className="text-end">
                                <button type="submit" className="btn btn-warning px-4">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>

            <footer>
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
                            <li><a href="index.html" className="text-white text-opacity-75">Inicio</a></li>
                            <li><a href="Servicios.html" className="text-white text-opacity-75">Servicios</a></li>
                            <li><a href="terminosServicio.html" className="text-white text-opacity-75">Términos del servicio</a></li>
                            <li><a href="politicaPrivacidad.html" className="text-white text-opacity-75">Política de privacidad</a></li>
                        </ul>
                    </div>
                </div>

                <div className="row mt-2 text-center">
                    <div className="col-12">
                        <p>&copy; Copyright FC. Mercado - Todos los derechos reservados</p>
                        <p>Diseñado por FC.</p>
                    </div>
                </div>
            </footer>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
        </div>
    );
};

export default LocalSesion;
