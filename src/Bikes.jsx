import React, { useState } from 'react';
import './Bikes.css';
import Navbar from './components/Navbar.jsx'; 
import Footer from './components/Footer.jsx';

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
      <Navbar /> {}

      <main className="contenido container py-5">
        <h1 className="text-center text-uppercase">Motos</h1>

        <section className="container-products">
          <div className="row mt-4" id="motos-container">
            <div className="col-md-4 moto-item" id="moto-1">
              <div className="card">
                <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Moto 1" />
                <div className="card-body">
                  <h5
                    className="card-title"
                    data-bs-toggle="modal"
                    data-bs-target="#modalDetalleMoto"
                    onClick={() => mostrarDetalle('Moto 1', 'https://via.placeholder.com/300x200', 'Detalles de la Moto 1', '3000')}
                  >
                    Moto 1
                  </h5>
                  <p className="card-text">Detalles o especificaciones.</p>
                  <button className="btn btn-eliminar" onClick={() => eliminarMoto('moto-1')}>Eliminar</button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
                <button className="btn btn-warning btn-agregar-producto" data-bs-toggle="modal" data-bs-target="#modalAgregarMoto">
                  Agregar Moto
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modales */}
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

      <Footer /> {}
    </div>
  );
};

export default Bikes;
