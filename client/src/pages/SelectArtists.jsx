import React, { useState, useEffect, useContext } from 'react';
import HeaderwithNav from '../components/TitlewithNav';
import { PlaylistContext } from '../pages/PlaylistContext';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie'

export default function SelectArtists() {
    const { playlistData, setPlaylistData, remainingSelections, setRemainingSelections } = useContext(PlaylistContext);
    const [token, setToken] = React.useState(Cookies.get("spotifyAuthToken"));

    // State to store search input
    const [searchInput, setSearchInput] = useState('');

    // State to store search results
    const [searchResults, setSearchResults] = useState([]);

    // State to store selected artists
    const [selectedArtists, setSelectedArtists] = useState([]);

    // Function to search for artists
    const searchArtists = async () => {
        try {
            const response = await fetch(`https://api.spotify.com/v1/search?q=${searchInput}&type=artist`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await response.json();
            setSearchResults(data.artists.items);
        } catch (error) {
            console.error('Error searching for artists:', error);
        }
    };

    // Function to handle search input change
    const handleSearchChange = (event) => {
        setSearchInput(event.target.value);
    };

    // Function to include artist
    const includeArtist = (artist) => {
        if (!selectedArtists.includes(artist)) {
            if (selectedArtists.length < 16) {
                setSelectedArtists([...selectedArtists, artist]);
                setPlaylistData({ ...playlistData, artists: [...playlistData.artists, artist] });
                // selected value countdown
                setRemainingSelections(remainingSelections - 1);
            }
        }
    };

    // Function to remove artist
    const removeArtist = (artist) => {
        setSelectedArtists(selectedArtists.filter(selected => selected.id !== artist.id));
        setPlaylistData({ ...playlistData, artists: playlistData.artists.filter(selected => selected.id !== artist.id) });
        // selected value countdown
        setRemainingSelections(remainingSelections + 1);
    };

    useEffect(() => {
        if (searchInput) {
            searchArtists();
        } else {
            setSearchResults([]);
        }
    }, [searchInput]);

    return (
        <div>
            <HeaderwithNav />
            <div className='select-artists-page'>
                <h3 className='h3-title'>Select Artists</h3>
                <h4 className='countdown'>Remaining Selections: {remainingSelections}</h4>
                <form>
                    <input
                        type="text"
                        placeholder="Search artists"
                        value={searchInput}
                        onChange={handleSearchChange} 
                        id='artist-input'/>
                    <ul id='artists-container'>
                        {searchResults.map(artist => (
                            <p
                                className={`artist-option ${selectedArtists.includes(artist) ? 'selected' : ''}`}
                                key={artist.id}
                                onClick={() => includeArtist(artist)}
                            >
                                {artist.name}
                            </p>
                        ))}
                    </ul>
                    <div id='selected-artists-container'>
                        <h4 id="h4-selected-artists">Selected Artists</h4>
                        {selectedArtists.map(artist => (
                            <p className="included-artist" key={artist.id}>{artist.name}<span><button onClick={() => removeArtist(artist)}>remove artist</button></span></p>
                        ))}
                    </div>
                </form>
            </div>
            <div className="gen-btn-container">
                <Link to="/SelectGenres"><button id='back-btn'>Back</button></Link>
                <Link to="/SelectSongCount"><button id='next-btn'>Next</button></Link>
            </div>
        </div>
    );
}