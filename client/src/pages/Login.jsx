import React, { useState } from 'react';
import Title from "../components/Title";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Handles logging in a new user up OR catches an error
    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.token);
                window.location.href = '/Home';
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div>
            <Title />
            <div className="login-signup-container">
                <h3 className="h3-title">login</h3>
                <form id="login-form">
                    <input
                        id="email-input"
                        type="text"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="off" />
                    <br />
                    <input
                        id="pass-input"
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="off" />
                </form>
                <div className="btn-container">
                    <button id="login" onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    );
}