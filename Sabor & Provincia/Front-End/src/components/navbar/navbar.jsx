import { useState } from "react";
import './navbar.css'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="navbar-container">
            <nav className="navbar">
                <a href="#hero" className="navbar-logo" >
                    <span className="navbar-logo-icon">S&P</span>
                </a>

                {/* Botón Hamburguesa */}
                <button className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                {/* Contenedor de navegación con clase dinámica */}
                <div className={`nav-menu-container ${isOpen ? 'open' : ''}`}>
                    {/* Botón de cerrar (X) para móvil */}
                    <button className="close-menu" onClick={toggleMenu}>✕</button>
                    
                    <div className="labels-navigation">
                        <a href="#hero" className="nav-link p1" onClick={toggleMenu}>INICIO</a>
                        <a href="#historia" className="nav-link p1" onClick={toggleMenu}>HISTORIA</a>
                        <a href="#receta" className="nav-link p1" onClick={toggleMenu}>RECETA</a>
                        <a href="#contribuidores" className="nav-link p1" onClick={toggleMenu}>CONTRIBUIDORES</a>
                    </div>

                    <div className="navbar-social-media-buttons">
                        <button className="btn-nav-don-pepe p2">DON PEPE</button>
                        <button className="btn-nav-elguche p2">ELGUCHE</button>
                    </div>
                </div>
            </nav>
        </header>
    );
}