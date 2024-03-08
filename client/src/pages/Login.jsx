import React, { useState } from 'react';
import Title from "../components/Title";

import { useMutation } from '@apollo/client';

import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

export default function Login() {

    // Handles logging in a new user up OR catches an error
    const [formState, setFormState] = useState({
        email: '',
        password: '',
    });

    // Mutation to login a user
    const [loginUser, { data }] = useMutation(LOGIN_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await loginUser({
                variables: { ...formState },
            });
            console.log(data);
            Auth.login(data.loginUser.token);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <Title />
            <div className="login-signup-container">
                <h3 className="h3-title">login</h3>
                <form id="login-form" onSubmit={handleFormSubmit}>
                    <input
                        id="email-input"
                        type="text"
                        placeholder="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        autoComplete="off" />
                    <br />
                    <input
                        id="pass-input"
                        type="password"
                        placeholder="password"
                        name="password"
                        value={formState.password}
                        onChange={handleChange}
                        autoComplete="off" />
                    <div className="btn-container">
                        <button id="login" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}