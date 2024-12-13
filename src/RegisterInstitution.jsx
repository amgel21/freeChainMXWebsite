import React from "react";
import './RegisterInstitution.css';

const RegisterInstitution= () => (
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
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
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

const RegistrationForm = () => (
  <div className="imagen-fondo">
    <div className="form-container">
      <h2>Formulario de Registro</h2>
      <form id="registrationForm" onSubmit={(e) => {
        e.preventDefault();
        alert('Formulario guardado correctamente');
      }}>
        <div className="mb-3">
          <label htmlFor="organization-type" className="form-label">Tipo de Organización</label>
          <select id="organization-type" name="organization-type" className="form-select" required>
            <option value="">Seleccionar tipo</option>
            <option value="motoclub">Motoclub</option>
            <option value="independiente">Independiente</option>
            <option value="motogrupo">Moto Grupo</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="user-id" className="form-label">ID de Usuario</label>
          <input type="text" id="user-id" name="user-id" className="form-control" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo Electrónico</label>
          <input type="email" id="email" name="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label htmlFor="file-upload" className="form-label">Seleccionar archivo</label>
          <input type="file" id="file-upload" name="file-upload" className="form-control" required />
        </div>
        <div className="mb-3">
          <label htmlFor="organization-name" className="form-label">Nombre de la Organización</label>
          <input type="text" id="organization-name" name="organization-name" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary w-100">Guardar</button>
      </form>
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
    <Header />
    <RegistrationForm />
    <Footer />
  </>
);

export default RegisterInstitution;
