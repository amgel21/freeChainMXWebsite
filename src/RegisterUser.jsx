import React, { useState } from "react";
import './RegisterUser.css';
import Navbar from './components/Navbar.jsx'; 
import Footer from './components/Footer.jsx'; 

const RegisterUser = () => {
    const [step, setStep] = useState(1);

    return (
        <>
            <Navbar />

            <div className="imagen-fondo"></div>
            <div className="container">
                {step === 1 ? <FirstForm onNext={() => setStep(2)} /> : <SecondForm />}
            </div>
            <Footer />
        </>
    );
};

const FirstForm = ({ onNext }) => (
    <div className="form-container">
        <h2>Completa los siguientes campos</h2>
        <form onSubmit={(e) => {
            e.preventDefault();
            onNext();
        }}>
            <div className="form-group">
                <label htmlFor="name">Nombre(s)</label>
                <input type="text" id="name" name="name" required className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Apellido Paterno</label>
                <input type="text" id="lastName" name="lastName" required className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="motherLastName">Apellido Materno</label>
                <input type="text" id="motherLastName" name="motherLastName" required className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <input type="email" id="email" name="email" placeholder="ejemplo@dominio.com" required className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="address">Dirección (Calle y Número)</label>
                <input type="text" id="address" name="address" required className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="neighborhood">Colonia</label>
                <input type="text" id="neighborhood" name="neighborhood" required className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="municipality">Municipio</label>
                <input type="text" id="municipality" name="municipality" required className="form-control" />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary w-100">Registrar</button>
            </div>
        </form>
        <div className="text-center">
            <p><a href="#">Recuperar cuenta</a></p>
        </div>
    </div>
);

const SecondForm = () => (
    <div className="form-container">
        <h2>Formulario de Datos Clínicos</h2>
        <form onSubmit={(e) => {
            e.preventDefault();
            alert("Registro exitoso");
        }}>
            <div className="form-group">
                <label htmlFor="bloodType">Tipo de Sangre</label>
                <select id="bloodType" name="bloodType" className="form-control" required>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="chronicDisease">¿Padeces alguna enfermedad crónico-degenerativa?</label>
                <input type="text" id="chronicDisease" name="chronicDisease" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="treatment">¿Cuál es tu tratamiento?</label>
                <input type="text" id="treatment" name="treatment" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="organDonation">¿Eres donador de órganos?</label>
                <select id="organDonation" name="organDonation" className="form-control">
                    <option value="yes">Sí</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="donorID">ID de Donador de Órganos</label>
                <input type="text" id="donorID" name="donorID" className="form-control" />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary w-100">Enviar Datos</button>
            </div>
        </form>
    </div>
);

export default RegisterUser;
