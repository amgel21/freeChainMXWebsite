import React from "react";
import './Profile.css';

const Profile = () => (
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

const MainContent = () => (
  <main className="contenido container py-5">
    <div className="header-profile text-center">
      <img src="https://via.placeholder.com/150" alt="Foto de perfil" className="rounded-circle" />
      <h2>Álvaro</h2>
      <p>Miembro desde 2024</p>
    </div>
    <section className="row">
      {[
        { title: "Grupo", details: "Detalles del grupo o personas asociadas.", modalId: "modalGrupo" },
        { title: "Contacto de Emergencia", details: "Lista de contactos importantes.", modalId: "modalContacto" },
        { title: "Eventos", details: "Eventos importantes asociados.", modalId: "modalEventos" },
        { title: "Recuerdos", details: "Recuerdos o fotografías importantes.", modalId: "modalRecuerdos" }
      ].map((item, index) => (
        <div className="col-md-6 mb-4" key={index}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p>{item.details}</p>
              <button
                className="btn btn-agregar"
                data-bs-toggle="modal"
                data-bs-target={`#${item.modalId}`}
              >
                Agregar {item.title}
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  </main>
);

const Footer = () => (
  <footer className="bg-dark text-white py-4">
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
            <li><a href="index.html" className="text-white text-opacity-75">Inicio</a></li>
            <li><a href="sobreNosotros.html" className="text-white text-opacity-75">Sobre nosotros</a></li>
            <li><a href="Servicios.html" className="text-white text-opacity-75">Servicios</a></li>
            <li><a href="terminosServicio.html" className="text-white text-opacity-75">Términos del servicio</a></li>
            <li><a href="politicaPrivacidad.html" className="text-white text-opacity-75">Política de privacidad</a></li>
          </ul>
        </div>
      </div>
      <div className="row mt-2 text-center">
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
    <MainContent />
    <Footer />
  </>
);

export default Profile;
