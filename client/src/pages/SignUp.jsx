import React, { useState } from 'react';
import Title from "../components/Title"
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

export default function SignUp() {

    // Handles signing a new user up and either logging them in after sign up completion OR catches an error
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
    });

    // Mutation to add a new user
    const [addUser, { data }] = useMutation(ADD_USER);

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
            const { data } = await addUser({
                variables: { ...formState },
            });
            console.log(data);
            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <Title />
            <div className="login-signup-container">
                <h3 className="h3-title">sign up</h3>
                <form id="sign-up-form" onSubmit={handleFormSubmit}>
                    <input
                        id="username-input"
                        type="text"
                        placeholder="username"
                        name="username"
                        value={formState.name}
                        onChange={handleChange}
                        autoComplete="off" 
                        required />
                    <br />
                    <input
                        id="email-input"
                        type="text"
                        placeholder="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        autoComplete="off" 
                        required />
                    <br />
                    <input
                        id="pass-input"
                        type="password"
                        placeholder="password"
                        name="password"
                        value={formState.password}
                        onChange={handleChange}
                        autoComplete="off" 
                        required />
                    <div className="btn-container">
                        <button id="sign-up"type="submit">sign up</button>
                    </div>
                </form>
                <Link to="/Login"><p id='back-link'>Already have an account? Login</p></Link>
            </div>
        </div>
    );
}