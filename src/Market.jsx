import React, { useState } from 'react';
import './Market.css';
import Navbar from './components/Navbar.jsx'; 
import Footer from './components/Footer.jsx'; 

const Market = () => {
  const [modalDetail, setModalDetail] = useState({
    name: '',
    image: '',
    description: '',
    price: ''
  });

  const showDetail = (name, image, description, price) => {
    setModalDetail({ name, image, description, price });
  };

  const contactSeller = () => {
    alert('Contacto con el vendedor');
  };

  const purchase = () => {
    alert('Compra realizada');
  };

  return (
    <div className="bg-light text-dark">
      <Navbar /> {/* Usa el componente Navbar aquí */}
      
      <main className="contenido container py-5">
        <h1 className="text-center text-uppercase">Mercado</h1>

        <section className="container-products">
          <div className="row mt-4">
            {[1, 2, 3].map((product, index) => (
              <div className="col-md-3" key={index}>
                <div className="card">
                  <img src={`https://via.placeholder.com/300x200`} className="card-img-top" alt={`Producto ${product}`} />
                  <div className="card-body">
                    <h5 className="card-title" data-bs-toggle="modal" data-bs-target="#modalDetalleProducto" onClick={() => showDetail(`Producto ${product}`, `https://via.placeholder.com/300x200`, 'Detalles', `${1500 + index * 300}`)}>
                      Producto {product}
                    </h5>
                    <p className="card-text">Detalles.</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-md-3">
              <div className="card d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
                <button className="btn btn-warning btn-agregar-producto" data-bs-toggle="modal" data-bs-target="#modalAgregarProducto">Agregar Producto</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modal Detalle Producto */}
      <div className="modal fade" id="modalDetalleProducto" tabIndex="-1" aria-labelledby="modalDetalleProductoLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalDetalleProductoLabel">Detalles del Producto</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div className="modal-body">
              <img id="detalle-imagen" src={modalDetail.image} alt="Imagen del producto" />
              <h4 id="detalle-nombre">{modalDetail.name}</h4>
              <p id="detalle-descripcion">{modalDetail.description}</p>
              <p><strong>Precio:</strong> ${modalDetail.price}</p>
              <div className="d-flex justify-content-between">
                <button className="btn btn-primary" onClick={contactSeller}>Contactar al Vendedor</button>
                <button className="btn btn-success" onClick={purchase}>Comprar</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer /> {}
    </div>
  );
};

export default Market;
