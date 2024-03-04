import React, { useState, useEffect } from 'react';
import HeaderwithNav from '../components/TitlewithNav';
import { Link, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie'

export default function SelectGenres() {
    const currentPage = useLocation().pathname;

    const [token, setToken] = React.useState(Cookies.get("spotifyAuthToken"));

    // State to store genre options
    const [genres, setGenres] = useState([]);

    // State to store selected genres
    const [selectedGenres, setSelectedGenres] = useState([]);

    // Fetch genre options from Spotify API
    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await fetch('https://api.spotify.com/v1/recommendations/available-genre-seeds', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();
                setGenres(data.genres);
            } catch (error) {
                console.error('Error fetching genres:', error);
            }
        };

        fetchGenres();
    }, []);

    // Function to handle genre selection
    const handleGenreSelection = (genre) => {
        if (selectedGenres.includes(genre)) {
            setSelectedGenres(selectedGenres.filter(item => item !== genre));
        } else {
            setSelectedGenres([...selectedGenres, genre]);
        }
    };

    return (
        <div>
            <HeaderwithNav />
            <div className='select-genre-page'>
                <h3 className='h3-title'>generate a new playlist</h3>
                <h4 className='instructions'>select genres:</h4>
                <ul id='genres-container'>
                    {genres.map(genre => (
                        <p
                            className={`genre-option ${selectedGenres.includes(genre) ? 'selected' : ''}`}
                            key={genre}
                            onClick={() => handleGenreSelection(genre)}
                        >
                            {genre}
                        </p>
                    ))}
                </ul>
            </div>
            <div className="gen-btn-container">
                <Link to="/CreatePlaylist" className={currentPage === '/CreatePlaylist'}><button id='back-btn'>Back</button></Link>
                <Link to="/SelectArtists" className={currentPage === '/SelectArtists'}><button id='next-btn'>Next</button></Link>
            </div>
        </div>
    );
}