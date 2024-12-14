import React from "react";
import './RegisterInstitution.css';
import Navbar from './components/Navbar.jsx'; 
import Footer from './components/Footer.jsx'; 

const RegisterInstitution = () => (
  <>
    <Navbar /> {}

    <RegistrationForm />

    <Footer /> {}
  </>
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

export default RegisterInstitution;
