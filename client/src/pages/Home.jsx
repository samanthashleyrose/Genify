import React, { useState, useEffect } from 'react';
import LinkSpotify from '../components/LinkSpotify';
import { Link } from 'react-router-dom';
import Message from '../components/Message';

import Auth from '../utils/auth';

export default function Home() {
    const [showAlert, setShowAlert] = useState(false);

    // Handles logging out a user
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();

    }
    // Message displays informing user they must link their spotify account before they can generate a playlist
    const linkSpotifyAlert = (event) => {
        event.preventDefault();

        const spotifyToken = localStorage.getItem('spotify_token');

        // Allows user to move onto /CreatePlaylist if spotify token found in local storage
        if (spotifyToken) {
            window.location.href = '/CreatePlaylist';
        } else {
            setShowAlert(true);
        }
    }

    // Function to close the alert message
    const closeAlert = () => {
        setShowAlert(false);
    }

    return (
        <div className='home-container'>
            <div className="header-nav-container">
                <div className="titles-container">
                    <h1 id="sm-title">Genify</h1>
                    <h2 id="sm-subtitle">a spotify playlist generator.</h2>
                </div>

                <Link to="/"><button id="logout" onClick={logout}>logout</button></Link>
            </div>
            <div className='home-info'>
                <h3 className='h3-title'>Welcome</h3>
                <div className="btn-container">
                    <Link to="/ViewPlaylists"><button id='view-playlists'>view playlists</button></Link>
                    <br />
                    <Link to="/CreatePlaylist"><button id='gen-playlist' onClick={linkSpotifyAlert}>generate playlist</button></Link>
                </div>
            </div>
            <LinkSpotify />
            {showAlert && <Message onClose={closeAlert} />}
        </div>
    );
}