import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LocalSesion.css';
import Navbar from './components/Navbar.jsx'; 
import Footer from './components/Footer.jsx'; 

const LocalSesion = () => {
    return (
        <div className="bg-light">
            <Navbar />

            <main className="contenido container my-4">
                <h2 className="text-uppercase fw-bold">Localizar</h2>

                <div className="row mt-4">
                    <div className="col-lg-8">
                        <p className="text-muted mb-2">La última ubicación registrada</p>
                        <div className="border rounded-3 overflow-hidden">
                            <img src="https://via.placeholder.com/800x400" alt="Map" className="img-fluid" />
                        </div>
                    </div>

                    <div className="col-lg-4 mt-4 mt-lg-0">
                        <div className="d-flex align-items-center mb-3">
                            <p className="mb-0">
                                <strong>Ubicación:</strong><br />
                                A108 Adam Street, New York, NY 535022
                            </p>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <p className="mb-0">
                                <strong>Llamar:</strong><br />
                                +1 5589 55488 55
                            </p>
                        </div>
                        <div className="d-flex align-items-center">
                            <p className="mb-0">
                                <strong>Email:</strong><br />
                                info@example.com
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-lg-8 offset-lg-4">
                        <form>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="Tu nombre" />
                                </div>
                                <div className="col-md-6">
                                    <input type="email" className="form-control" placeholder="Tu email" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Dirigido a:" />
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control" rows="4" placeholder="Mensaje"></textarea>
                            </div>
                            <div className="text-end">
                                <button type="submit" className="btn btn-warning px-4">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default LocalSesion;
