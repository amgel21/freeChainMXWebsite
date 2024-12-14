import React from "react";
import './LoginSesion.css';
import Navbar from './components/Navbar.jsx'; 
import Footer from './components/Footer.jsx'; 

const LoginSesion = () => (
  <>
    <Navbar />
    
    <MainContent />
    
    <Footer />
  </>
);

const MainContent = () => (
  <main className="contenido container py-5">
    <div className="form-container">
      <h2>Iniciar Sesión</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" id="email" name="email" className="form-control" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" className="form-control" required />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
        </div>
        <div className="text-center">
          <p><a href="#">¿Olvidaste tu contraseña?</a></p>
          <p><a href="#">Crear una cuenta nueva</a></p>
        </div>
      </form>
    </div>
  </main>
);

export default LoginSesion;
