import React, { useEffect, useState } from 'react';

const Home = () => {
    const [estaLogueado, setEstaLogueado] = useState(false);

    useEffect(() => {
        const perfilOLogin = document.getElementById('perfil-o-login');

        if (estaLogueado) {
            perfilOLogin.innerHTML = `
                <div class="dropdown">
                    <div class="circulo-perfil" id="dropdownPerfil" data-bs-toggle="dropdown" aria-expanded="false"></div>
                    <ul class="menu-dropdown" aria-labelledby="dropdownPerfil">
                        <li><a class="dropdown-item" href="#">Mi Perfil</a></li>
                        <li><a class="dropdown-item" href="#">Ajustes</a></li>
                        <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
                    </ul>
                </div>
            `;
        } else {
            perfilOLogin.innerHTML = `
                <div class="enlaces-login">
                    <div class="iniciar-sesion">
                        <a href="#">Iniciar sesión</a>
                    </div>
                    <div class="crear-cuenta">
                        <a href="#">Crear cuenta</a>
                    </div>
                </div>
            `;
        }
    }, [estaLogueado]);

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
                    <div className="d-flex">
                        <a href="registroUsuario.html" className="btn btn-warning text-white me-2">Registrar</a>
                        <a href="inicioSecion.html" className="btn btn-secondary text-white">Iniciar</a>
                    </div>
                </div>
            </header>

            <div className="container-fluid imagen-fondo">
                <div className="contenido-principal">
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-3 mb-3">
                            <div className="border border-white border-opacity-25 py-3 text-center">
                                <a href="MotoClub.html" className="fw-bold text-white text-opacity-75">Moto Clubs</a>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="border border-white border-opacity-25 py-3 text-center">
                                <a href="Eventos.html" className="fw-bold text-white text-opacity-75">Eventos</a>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="border border-white border-opacity-25 py-3 text-center">
                                <a href="Informacion.html" className="fw-bold text-white text-opacity-75">Información</a>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="border border-white border-opacity-25 py-3 text-center">
                                <a href="Emergencias.html" className="fw-bold text-white text-opacity-75">Emergencias</a>
                            </div>
                        </div>
                    </div>
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

            <div id="perfil-o-login"></div>
        </div>
    );
};

export default Home;
