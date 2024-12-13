import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Bikes.css';

const Bikes = () => {
    const [detalle, setDetalle] = useState({
        nombre: '',
        imagen: '',
        descripcion: '',
        precio: ''
    });

    const mostrarDetalle = (nombre, imagen, descripcion, precio) => {
        setDetalle({ nombre, imagen, descripcion, precio });
    };

    const contactarVendedor = () => {
        alert('Contacto con el vendedor');
    };

    const comprar = () => {
        alert('Compra realizada');
    };

    const eliminarMoto = (motoId) => {
        const moto = document.getElementById(motoId);
        if (moto) {
            moto.remove();
        }
    };

    return (
        <div className="bg-light text-dark">
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
                <h1 className="text-center text-uppercase">Motos</h1>

                <section className="container-products">
                    <div className="row mt-4" id="motos-container">
                        <div className="col-md-4 moto-item" id="moto-1">
                            <div className="card">
                                <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Moto 1" />
                                <div className="card-body">
                                    <h5 className="card-title" data-bs-toggle="modal" data-bs-target="#modalDetalleMoto" onClick={() => mostrarDetalle('Moto 1', 'https://via.placeholder.com/300x200', 'Detalles de la Moto 1', '3000')}>Moto 1</h5>
                                    <p className="card-text">Detalles o especificaciones.</p>
                                    <button className="btn btn-eliminar" onClick={() => eliminarMoto('moto-1')}>Eliminar</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
                                <button className="btn btn-warning btn-agregar-producto" data-bs-toggle="modal" data-bs-target="#modalAgregarMoto">Agregar Moto</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <div className="modal fade" id="modalDetalleMoto" tabIndex="-1" aria-labelledby="modalDetalleMotoLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalDetalleMotoLabel">Detalles de la Moto</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                        </div>
                        <div className="modal-body">
                            <img id="detalle-imagen" src={detalle.imagen} alt="Imagen de la moto" />
                            <h4 id="detalle-nombre">{detalle.nombre}</h4>
                            <p id="detalle-descripcion">{detalle.descripcion}</p>
                            <div className="d-flex justify-content-between">
                                <button className="btn btn-primary" onClick={contactarVendedor}>Contactar al Vendedor</button>
                                <button className="btn btn-success" onClick={comprar}>Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="modalAgregarMoto" tabIndex="-1" aria-labelledby="modalAgregarMotoLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalAgregarMotoLabel">Agregar Moto</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="modelo" className="form-label">Modelo</label>
                                    <input type="text" className="form-control" id="modelo" placeholder="Ingresa el modelo de la moto" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="cilindros" className="form-label">Cilindros</label>
                                    <select className="form-select" id="cilindros">
                                        <option value="100cc">100cc</option>
                                        <option value="110cc-140cc">110cc-140cc</option>
                                        <option value="150cc">150cc</option>
                                        <option value="160cc-190cc">160cc-190cc</option>
                                        <option value="200cc">200cc</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="placas" className="form-label">Placas</label>
                                    <input type="text" className="form-control" id="placas" placeholder="Número de placas" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="imagen" className="form-label">Subir Imagen</label>
                                    <input type="file" className="form-control" id="imagen" />
                                </div>
                                <button type="submit" className="btn btn-success w-100">Guardar</button>
                            </form>
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

export default Bikes;
