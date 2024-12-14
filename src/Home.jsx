import React, { useEffect, useState } from 'react';
import './Home.css';
import NavbarComponent from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

const Home = () => {
  const [estaLogueado, setEstaLogueado] = useState(false);

  useEffect(() => {
    const usuarioLogueado = localStorage.getItem('usuarioLogueado');
    setEstaLogueado(usuarioLogueado ? true : false);
  }, []);

  return (
    <div>
      <NavbarComponent estaLogueado={estaLogueado} /> {}

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

      <Footer /> {}
    </div>
  );
};

export default Home;

