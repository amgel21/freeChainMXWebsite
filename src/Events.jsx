import React, { useState } from 'react';
import './Events.css';
import CustomNavbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

const Events = () => {
  const [modalInfo, setModalInfo] = useState({ titulo: '', descripcion: '', fecha: '', direccion: '' });
  const [showForm, setShowForm] = useState(false);

  const mostrarDetalles = (titulo, descripcion, fecha, direccion) => {
    setModalInfo({ titulo, descripcion, fecha, direccion });
  };

  return (
    <div className="bg-light">
      <CustomNavbar />

      <main className="contenido container py-5">
        <h1 className="text-center text-uppercase">Eventos 2024</h1>
        <section className="container-events">
          <button className="btn btn-crear-evento" onClick={() => setShowForm(true)}>Crear Evento</button>
          {showForm && (
            <div className="formulario-evento">
              <h3>Crear Evento</h3>
              <form>
                {}
              </form>
            </div>
          )}
          <div className="row mt-4">
            {}
          </div>
        </section>
      </main>

      <div className="modal fade" id="eventoModal" tabIndex="-1" aria-labelledby="eventoModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="eventoModalLabel">Detalles del Evento</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div className="modal-body">
              <p><strong>Título:</strong> {modalInfo.titulo}</p>
              <p><strong>Descripción:</strong> {modalInfo.descripcion}</p>
              <p><strong>Fecha:</strong> {modalInfo.fecha}</p>
              <p><strong>Dirección:</strong> {modalInfo.direccion}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Events;
