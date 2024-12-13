import React, { useState } from 'react';
import './Market.css';

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

      {/* Footer */}
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
            <p>© Copyright FC. Mercado - Todos los derechos reservados</p>
            <p>Diseñado por FC.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Market;
