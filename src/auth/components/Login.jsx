import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(!!sessionStorage.getItem('user')); // Verificar si ya hay un usuario logueado
    const navigate = useNavigate();

    // Usuario simulado
    const fakeUser = {
        email: 'test@example.com',
        password: '123456',
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === fakeUser.email && password === fakeUser.password) {
            sessionStorage.setItem('user', JSON.stringify({ email }));
            setIsLoggedIn(true);
            alert('Inicio de sesión exitoso');
        } else {
            alert('Credenciales incorrectas');
        }
    };

    const handleLogout = () => {
        sessionStorage.removeItem('user');
        setIsLoggedIn(false);
        navigate('/login'); // Redirigir a la página de inicio de sesión
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}> 
            <form onSubmit={handleLogin} style={{ maxWidth: '300px', margin: '0 auto' }}>
                <h2>Iniciar Sesión</h2>
                <div>
                    <input
                        type="email"
                        placeholder="Correo"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                            display: 'block',
                            width: '100%',
                            padding: '10px',
                            marginBottom: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                        }}
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            display: 'block',
                            width: '100%',
                            padding: '10px',
                            marginBottom: '20px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                        }}
                        required
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#4caf50',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Iniciar Sesión
                </button>
            </form>
            {isLoggedIn && navigate('/Home')}
        </div>
    );
}

export default Login;
