import React, { useState } from "react";
import './RegisterUser.css';

const RegisterUser = () => (
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
);

const FirstForm = ({ onNext }) => (
  <div className="form-container">
    <h2>Completa los siguientes campos</h2>
    <form onSubmit={(e) => {
      e.preventDefault();
      onNext();
    }}>
      <div className="form-group">
        <label htmlFor="name">Nombre(s)</label>
        <input type="text" id="name" name="name" required className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Apellido Paterno</label>
        <input type="text" id="lastName" name="lastName" required className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="motherLastName">Apellido Materno</label>
        <input type="text" id="motherLastName" name="motherLastName" required className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Correo Electrónico</label>
        <input type="email" id="email" name="email" placeholder="ejemplo@dominio.com" required className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="address">Dirección (Calle y Número)</label>
        <input type="text" id="address" name="address" required className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="neighborhood">Colonia</label>
        <input type="text" id="neighborhood" name="neighborhood" required className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="municipality">Municipio</label>
        <input type="text" id="municipality" name="municipality" required className="form-control" />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary w-100">Registrar</button>
      </div>
    </form>
    <div className="text-center">
      <p><a href="#">Recuperar cuenta</a></p>
    </div>
  </div>
);

const SecondForm = () => (
  <div className="form-container">
    <h2>Formulario de Datos Clínicos</h2>
    <form onSubmit={(e) => {
      e.preventDefault();
      alert("Registro exitoso");
    }}>
      <div className="form-group">
        <label htmlFor="bloodType">Tipo de Sangre</label>
        <select id="bloodType" name="bloodType" className="form-control" required>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="chronicDisease">¿Padeces alguna enfermedad crónico-degenerativa?</label>
        <input type="text" id="chronicDisease" name="chronicDisease" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="treatment">¿Cuál es tu tratamiento?</label>
        <input type="text" id="treatment" name="treatment" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="organDonation">¿Eres donador de órganos?</label>
        <select id="organDonation" name="organDonation" className="form-control">
          <option value="yes">Sí</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="donorID">ID de Donador de Órganos</label>
        <input type="text" id="donorID" name="donorID" className="form-control" />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary w-100">Enviar Datos</button>
      </div>
    </form>
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

const App = () => {
  const [step, setStep] = useState(1);

  return (
    <>
      <Header />
      <div className="imagen-fondo"></div>
      {step === 1 ? <FirstForm onNext={() => setStep(2)} /> : <SecondForm />}
      <Footer />
    </>
  );
};

export default RegisterUser;
