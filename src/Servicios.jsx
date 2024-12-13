import React from "react";
import './Servicios.css';

const Servicios = () => (
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
);

const ServiceCard = ({ link, title, description }) => (
  <div className="col-md-4 mb-4">
    <div className="service-card">
      <a href={link}>{title}</a>
      <p>{description}</p>
    </div>
  </div>
);

const Services = () => (
  <div className="container mt-5 content">
    <h2 className="services-title text-center mb-4">Nuestros Servicios</h2>
    <div className="row mt-4">
      <ServiceCard link="MotoClubs.html" title="Moto Clubs" description="Registra y edita tu moto club, moto grupo, o si eres independiente." />
      <ServiceCard link="Localisasion.html" title="Localizador" description="Rastrea la ubicación de un moto club, un moto grupo o de un usuario independiente." />
      <ServiceCard link="Emergencia.html" title="Emergencia" description="Reporta una emergencia, para que los usuarios más cercanos puedan ayudarte." />
      <ServiceCard link="Motos.html" title="Moto" description="Registra tu moto." />
      <ServiceCard link="Mercado.html" title="Mercado" description="Compra y venta de motos entre la comunidad." />
      <ServiceCard link="Eventos.html" title="Eventos" description="Organiza o participa en eventos de la comunidad." />
    </div>
  </div>
);

const Footer = () => (
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

const App = () => (
  <>
    <div className="imagen-fondo"></div>
    <Header />
    <Services />
    <Footer />
  </>
);

export default Servicios;
