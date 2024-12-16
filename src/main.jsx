import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './Home.jsx';
import LoginSesion from './LoginSesion.jsx';
import Events from './Events.jsx';
import Bikes from './Bikes.jsx';
import Market from './Market.jsx';
import Profile from './Profile.jsx';
import RegisterInstitution from './RegisterInstitution.jsx';
import RegisterUser from './RegisterUser.jsx';
import LocalSesion from './LocalSesion.jsx';
import ServiceCard from './ServiceCard.jsx';


const ServicePage = () => (
  <div className="container mt-5 content">
    <h2 className="services-title text-center mb-4">Nuestros Servicios</h2>
    <div className="row mt-4">
      <ServiceCard link="/moto-clubs" title="Moto Clubs" description="Registra y edita tu moto club, moto grupo, o si eres independiente." />
      <ServiceCard link="/localizador" title="Localizador" description="Rastrea la ubicación de un moto club, un moto grupo o de un usuario independiente." />
      <ServiceCard link="/emergencia" title="Emergencia" description="Reporta una emergencia, para que los usuarios más cercanos puedan ayudarte." />
      <ServiceCard link="/motos" title="Moto" description="Registra tu moto." />
      <ServiceCard link="/mercado" title="Mercado" description="Compra y venta de motos entre la comunidad." />
      <ServiceCard link="/eventos" title="Eventos" description="Organiza o participa en eventos de la comunidad." />
    </div>
  </div>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginsesion" element={<LoginSesion />} />
        <Route path="/events" element={<Events />} />
        <Route path="/localsesion" element={<LocalSesion />} />
        <Route path="/bikes" element={<Bikes />} />
        <Route path="/market" element={<Market />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/registerinstitution" element={<RegisterInstitution />} />
        <Route path="/registeruser" element={<RegisterUser />} />
        <Route path="/servicios" element={<ServicePage />} />
      </Routes>
    </Router>
  </StrictMode>
);
