import React, { Component } from 'react';
import logo from '../assets/images/logo1.png'
import { NavLink } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <header id="header">
                <div className="center">
                    <div id="logo">
                        <a href='/'>
                            <img src={logo} className="app-logo" alt="Logotipo" />
                        </a>
                        <span id="brand">
                            <strong>PlanificacionPERTfecta</strong>
                        </span>
                    </div>
                    <nav id="menu">
                        <ul>
                            <li>
                                <NavLink to="/home" activeclassname="active">Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/crearTE" activeclassname="active">Crear con TE</NavLink>
                            </li>
                            <li>
                                <NavLink to="/crearNTE" activeclassname="active">Crear sin TE</NavLink>
                            </li>
                           
                        </ul>
                    </nav>
                </div>
            </header>

        );
    }
}
export default Header;