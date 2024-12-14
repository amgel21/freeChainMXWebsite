import React from "react";
import './Profile.css';
import Navbar from './components/Navbar.jsx'; 
import Footer from './components/Footer.jsx'; 

const Profile = () => (
  <>
    <Navbar /> {}
    
    <MainContent />
    
    <Footer /> {}
  </>
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

export default Profile;
