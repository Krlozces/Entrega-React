import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/notFound.css';
import '../styles/main.css';
function NotFound() {
    return (
        <div className="not-found">
            <div className="animated-background"></div> {/* Fondo animado */}
            <div className="content-not-found">
                <h1>404</h1>
                <p>Oops! La página que estás buscando no existe.</p>
                <Link to="/" className="btn-home">Volver al inicio</Link>
            </div>
        </div>
    );
}

export default NotFound;
