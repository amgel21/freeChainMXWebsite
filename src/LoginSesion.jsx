import React from 'react';
import './LoginSesion.css';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

const LoginSesion = () => {
    return (
        <div>
            {}
            <Navbar />

            <div className="imagen-fondo"></div>

            <div className="form-container" id="firstFormContainer">
                <h2>Completa los siguientes campos</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="ejemplo@dominio.com" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Contraseña</label>
                        <input type="password" id="address" name="address" required />
                    </div>
                </form>
                <div className="text-center">
                    <p><a href="#">Recuperar cuenta</a></p>
                </div>
            </div>

            <Footer /> {}
        </div>
    );
};

export default LoginSesion;
