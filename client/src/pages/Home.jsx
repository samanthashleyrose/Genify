import React, { useState, useEffect } from 'react';
import LinkSpotify from '../components/LinkSpotify';
import { Link } from 'react-router-dom';
import Message from '../components/Message';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../utils/queries';
import Auth from '../utils/auth';
import Footer from '../components/Footer';

export default function Home() {
    const [showAlert, setShowAlert] = useState(false);

    // Query to get current user's username
    const {loading, data} = useQuery(GET_USER);

    // Handles logging out a user
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    }
    // Message displays informing user they must link their spotify account before they can generate a playlist
    const linkSpotifyAlertForGenPlaylist = (event) => {
        event.preventDefault();

        const spotifyToken = localStorage.getItem('spotify_token');

        // Allows user to move onto /CreatePlaylist if spotify token found in local storage
        if (spotifyToken) {
            window.location.href = '/CreatePlaylist';
        } else {
            setShowAlert(true);
        }
    }
    // Message displays informing user they must link their spotify account before they can view their playlists
    const linkSpotifyAlertForViewPlaylist = (event) => {
        event.preventDefault();

        const spotifyToken = localStorage.getItem('spotify_token');

        // Allows user to move onto /ViewPlaylists if spotify token found in local storage
        if (spotifyToken) {
            window.location.href = '/ViewPlaylists';
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
                <h3 className='h3-title'>Welcome, {data?.me?.username}</h3>
                <div className="btn-container">
                    <Link to="/ViewPlaylists"><button id='view-playlists' onClick={linkSpotifyAlertForViewPlaylist}>view playlists</button></Link>
                    <br />
                    <Link to="/CreatePlaylist"><button id='gen-playlist' onClick={linkSpotifyAlertForGenPlaylist}>generate playlist</button></Link>
                </div>
            </div>
            <LinkSpotify />
            {showAlert && <Message onClose={closeAlert} />}
            <Footer />
        </div>
    );
}