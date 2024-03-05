import React, { useState, useEffect } from 'react';
import HeaderwithNav from '../components/TitlewithNav';
import { Link } from 'react-router-dom';

export default function SelectSongCount() {
    // State to store the selected number of songs
    const [songCount, setSongCount] = useState(5);

    // Function to handle changes in the song count
    const handleSongCountChange = (event) => {
        setSongCount(parseInt(event.target.value));
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