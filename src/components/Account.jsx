import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Account() {
    const [showMenu, setShowMenu] = useState(false); // Estado para controlar la visibilidad del menú
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem('user'); // Eliminar la sesión
        setShowMenu(false); 
        navigate('/login'); // Redirigir al login
    };

    const handleClick = () => {
        const user = sessionStorage.getItem('user');
        if (!user) {
            navigate('/login'); // Redirigir al login si no hay sesión
        } else {
            setShowMenu(!showMenu);
        }
    };

    return (
        <div style={{ position: 'relative' }}>
            <FontAwesomeIcon
                icon={faUser}
                style={{
                    fontSize: '20px',
                    cursor: 'pointer',
                    color: '#333',
                }}
                onClick={handleClick}
            />
            {showMenu && sessionStorage.getItem('user') && (
                <div
                    style={{
                        position: 'absolute',
                        top: '25px',
                        right: '0',
                        background: '#fff',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        padding: '10px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    }}
                >
                    <button
                        onClick={handleLogout}
                        style={{
                            background: '#ff5722',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '5px',
                            padding: '10px 20px',
                            cursor: 'pointer',
                        }}
                    >
                        Salir
                    </button>
                </div>
            )}
        </div>
    );
}

export default Account;
