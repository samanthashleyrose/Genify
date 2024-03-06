import React, { useState, useContext } from 'react';
import HeaderwithNav from '../components/TitlewithNav';
import { PlaylistContext } from '../pages/PlaylistContext';
import { Link } from 'react-router-dom';

export default function SelectSongCount() {
    const { playlistData, setPlaylistData } = useContext(PlaylistContext);

    // State to store the selected number of songs
    const [songCount, setSongCount] = useState();

    // Function to handle changes in the song count
    const handleSongCountChange = (event) => {
        const count = parseInt(event.target.value);
        setSongCount(count);
        setPlaylistData({ ...playlistData, songCount: count });
    };

    return (
        <div>
            <HeaderwithNav />
            <div className='select-genre-page'>
                <h3 className='h3-title'>Select Song Count</h3>
                <h4 className='instructions'>how many songs would you like your playlist to have:</h4>
                <input id='range'
                    type="range"
                    min="5"
                    max="100"
                    value={songCount}
                    onChange={handleSongCountChange}
                />
                <p id='song-count'>{songCount} songs</p>
            </div>
            <div className="gen-btn-container">
                <Link to="/SelectArtists"><button id='back-btn'>Back</button></Link>
                <Link to="/SelectPlaylistName"><button id='next-btn'>Next</button></Link>
            </div>
        </div>
    );
}