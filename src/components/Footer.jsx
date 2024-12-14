import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
    return (
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
    );
};

export default Footer;
