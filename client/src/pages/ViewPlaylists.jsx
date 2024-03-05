import React, { useEffect, useState } from 'react';
import HeaderwithNav from '../components/TitlewithNav';
import { Link, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie'

export default function ViewPlaylists() {
    const [playlists, setPlaylists] = useState([]);
    const currentPage = useLocation().pathname;

    const [token, setToken] = React.useState(Cookies.get("spotifyAuthToken"));

    // Function to fetch user's Spotify playlists
    const fetchUserPlaylists = async () => {
        try {
            const response = await fetch('https://api.spotify.com/v1/me/playlists', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await response.json();
            setPlaylists(data.items);
        } catch (error) {
            console.error('Error fetching user playlists:', error);
        }
    };

    useEffect(() => {
        fetchUserPlaylists();
    }, []);

    return (
        <div>
            <HeaderwithNav />
            <div className='view-playlist-page'>
                <h3 className='h3-title'>your genify playlists</h3>
                <div className='genify-playlists-container'>
                    {playlists && playlists.map(playlist => (
                        <div key={playlist.id} className="playlist-item">
                            {playlist.images && playlist.images.length > 0 ? (
                                <img src={playlist.images[0].url} alt={playlist.name} className='playlist-img'/>
                            ) : (
                                <img src="src/assets/imgs/spotify-logo.png" alt="Spotify Logo" className='playlist-img'/>
                            )}
                            <h4 className='playlist-name'>{playlist.name}</h4>
                        </div>
                    ))}

                </div>
            </div>
            <div className="btn-container">
                <Link to="/Home" className={currentPage === '/Home'}><button id='back-btn'>Back</button></Link>
            </div>
        </div>
    );
}
