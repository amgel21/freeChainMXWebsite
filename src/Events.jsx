import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Events.css';

const Events = () => {
    const [modalInfo, setModalInfo] = useState({
        titulo: '',
        descripcion: '',
        fecha: '',
        direccion: ''
    });
    const [showForm, setShowForm] = useState(false);

    const mostrarDetalles = (titulo, descripcion, fecha, direccion) => {
        setModalInfo({ titulo, descripcion, fecha, direccion });
    };

    return (
        <div className="bg-light">
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
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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

            <main className="contenido container py-5">
                <h1 className="text-center text-uppercase">Eventos 2024</h1>

                <section className="container-events">
                    <button className="btn btn-crear-evento" id="btnCrearEvento" onClick={() => setShowForm(true)}>Crear Evento</button>

                    {showForm && (
                        <div className="formulario-evento" id="formularioEvento">
                            <h3>Crear Evento</h3>
                            <form id="eventoForm">
                                <div className="mb-3">
                                    <label htmlFor="imagen" className="form-label">Seleccionar Imagen</label>
                                    <input type="file" className="form-control" id="imagen" name="imagen" accept="image/*" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="titulo" className="form-label">Título</label>
                                    <input type="text" className="form-control" id="titulo" name="titulo" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="fecha" className="form-label">Fecha</label>
                                    <input type="date" className="form-control" id="fecha" name="fecha" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="descripcion" className="form-label">Descripción</label>
                                    <textarea className="form-control" id="descripcion" name="descripcion" rows="3" required></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="direccion" className="form-label">Dirección</label>
                                    <input type="text" className="form-control" id="direccion" name="direccion" required />
                                </div>
                                <button type="submit" className="btn btn-primary">Guardar</button>
                                <button type="button" className="btn btn-secondary" onClick={() => setShowForm(false)}>Cancelar</button>
                            </form>
                        </div>
                    )}

                    <div className="row mt-4">
                        <div className="col-md-4">
                            <div className="card">
                                <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Evento 1" />
                                <div className="card-body">
                                    <h5 className="card-title"><a href="#" className="text-decoration-none" data-bs-toggle="modal" data-bs-target="#eventoModal" onClick={() => mostrarDetalles('Evento 1', 'Descripción.', '2024-01-01', 'A108 Adam Street, New York, NY 535022')}>Título Evento 1</a></h5>
                                    <p className="card-text">Fecha: 2024-01-01</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Evento 2" />
                                <div className="card-body">
                                    <h5 className="card-title"><a href="#" className="text-decoration-none" data-bs-toggle="modal" data-bs-target="#eventoModal" onClick={() => mostrarDetalles('Evento 2', 'Descripcion.', '2024-02-15', '1234 Some Avenue, City, Country')}>Título Evento 2</a></h5>
                                    <p className="card-text">Fecha: 2024-02-15</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Evento 3" />
                                <div className="card-body">
                                    <h5 className="card-title"><a href="#" className="text-decoration-none" data-bs-toggle="modal" data-bs-target="#eventoModal" onClick={() => mostrarDetalles('Evento 3', 'Descripción.', '2024-03-30', '5678 Another St, City, Country')}>Título Evento 3</a></h5>
                                    <p className="card-text">Fecha: 2024-03-30</p>
                                </div>
                            </div>
                        </div>
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
                            <p><strong>Título:</strong> <span id="modalTitulo">{modalInfo.titulo}</span></p>
                            <p><strong>Descripción:</strong> <span id="modalDescripcion">{modalInfo.descripcion}</span></p>
                            <p><strong>Fecha:</strong> <span id="modalFecha">{modalInfo.fecha}</span></p>
                            <p><strong>Dirección:</strong> <span id="modalDireccion">{modalInfo.direccion}</span></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
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
            </footer>

        </div>
           );
        };
        
        export default Events;
