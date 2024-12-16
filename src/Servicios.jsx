import React from "react";
import './Servicios.css';
import Navbar from './components/Navbar.jsx'; 
import Footer from './components/Footer.jsx'; 

const ServiceCard = ({ link, title, description }) => (
  <div className="col-sm-12 col-md-6 col-lg-4 mb-4"> {}
    <div className="service-card">
      <a href={link}>{title}</a>
      <p>{description}</p>
    </div>
  </div>
);

const Services = () => (
  <div className="container-fluid mt-5 content"> {}
    <h2 className="services-title text-center mb-4">Nuestros Servicios</h2>

    <div className="row mt-4 justify-content-center"> {}
      <ServiceCard link="RegisterInstitution" title="Moto Clubs" description="Registra y edita tu moto club, moto grupo, o si eres independiente." />
      <ServiceCard link="Localisasion.html" title="Localizador" description="Rastrea la ubicación de un moto club, un moto grupo o de un usuario independiente." />
      <ServiceCard link="Emergencia.html" title="Emergencia" description="Reporta una emergencia, para que los usuarios más cercanos puedan ayudarte." />
      <ServiceCard link="Bikes" title="Moto" description="Registra tu moto." />
      <ServiceCard link="Market" title="Mercado" description="Compra y venta de motos entre la comunidad." />
      <ServiceCard link="Events" title="Eventos" description="Organiza o participa en eventos de la comunidad." />

    </div>
  </div>
);

const Servicios = () => (
  <>
    <Navbar />
    <div className="imagen-fondo"></div>
    <Services />
    <Footer />
  </>
);

export default Servicios;
