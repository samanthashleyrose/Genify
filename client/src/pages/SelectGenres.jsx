import React, { useState, useEffect, useContext } from 'react';
import HeaderwithNav from '../components/TitlewithNav';
import { PlaylistContext } from '../pages/PlaylistContext';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie'

export default function SelectGenres() {
    const { playlistData, setPlaylistData, remainingSelections, setRemainingSelections } = useContext(PlaylistContext);
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
    }, [token]);

    // Function to handle genre selection
    const handleGenreSelection = (genre) => {
        if (selectedGenres.includes(genre)) {
            setSelectedGenres(selectedGenres.filter(item => item !== genre));
            setPlaylistData({ ...playlistData, genres: playlistData.genres.filter(item => item !== genre) });
            // selected value countdown
            setRemainingSelections(remainingSelections + 1);
        } else {
            if (remainingSelections > 0) {
                setSelectedGenres([...selectedGenres, genre]);
                setPlaylistData({ ...playlistData, genres: [...playlistData.genres, genre] });
                // selected value countdown
                setRemainingSelections(remainingSelections - 1);
            }
        }
    };

    // Function to determine if a genre can be selected
    const canSelectGenre = (genre) => {
        return selectedGenres.includes(genre) || remainingSelections > 0;
    };

    return (
        <div>
            <HeaderwithNav />
            <div className='select-genre-page'>
                <h3 className='h3-title'>generate a new playlist</h3>
                <h4 className='countdown'>Remaining Selections: {remainingSelections}</h4>
                <h4 className='instructions'>select genres:</h4>
                <ul id='genres-container'>
                    {genres.map(genre => (
                        <p
                            className={`genre-option ${selectedGenres.includes(genre) ? 'selected' : ''}`}
                            key={genre}
                            onClick={() => canSelectGenre(genre) && handleGenreSelection(genre)}
                        >
                            {genre}
                        </p>
                    ))}
                </ul>
            </div>
            <div className="gen-btn-container">
                <Link to="/CreatePlaylist"><button id='back-btn'>Back</button></Link>
                <Link to="/SelectArtists"><button id='next-btn'>Next</button></Link>
            </div>
        </div>
    );
}