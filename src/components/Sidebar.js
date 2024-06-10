// Sidebar.js
import React from 'react';
import recargarImg from '../assets/images/recargar.png'
const Sidebar = ({ resetState, rutaCritica  }) => {
    return (
        <aside id="sidebar">
            <div id="nav-blog" className="sidebar-item">
                <h3>Ruta Critica: </h3>
                <h5>{rutaCritica}</h5>
            </div>
            <div id="nav-blog" className="sidebar-item" style={{ backgroundColor: 'transparent' }}>
                <h3>Limpiar</h3>
                {/* Utiliza la imagen en lugar de un botón */}
                <img
                    src={recargarImg}
                    alt="Recargar"
                    onClick={resetState}
                    style={{ width: '50px', height: '50px', cursor: 'pointer', backgroundColor: 'transparent' }} // Ajusta el tamaño aquí
                />
            </div>
        </aside>
    );
}

export default Sidebar;