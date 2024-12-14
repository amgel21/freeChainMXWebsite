import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './Home.jsx';
import LoginSesion from './LoginSesion.jsx';
import Events from './Events.jsx';
import LocalSesion from './LocalSesion.jsx';
import Bikes from './Bikes.jsx';
import Market from './Market.jsx';
import Profile from './Profile.jsx';
import RegisterInstitution from './RegisterInstitution.jsx';
import RegisterUser from './RegisterUser.jsx';
import Servicios from './Servicios.jsx';

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
        <Route path="/servicios" element={<Servicios />} />
      </Routes>
    </Router>
  </StrictMode>
);
