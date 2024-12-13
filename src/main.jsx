import 'bootstrap/dist/css/bootstrap.min.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'
import LoginSesion from './LoginSesion.jsx'
import Events from './Events.jsx'
import LocalSesion from './LocalSesion.jsx'
import Bikes from './Bikes.jsx'
import Market from './Market.jsx'
import Profile from './Profile.jsx'
import RegisterInstitution from './RegisterInstitution.jsx'
import RegisterUser from './RegisterUser.jsx'
import Servicios from './Servicios.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <LoginSesion />
    <Events />
    <LocalSesion />
    <Bikes />
    <Market />
    <Profile />
    <RegisterInstitution />
    <RegisterUser />
    <Servicios />
  </StrictMode>,
)
