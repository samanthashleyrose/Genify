import React, { useState, useContext } from 'react';
import HeaderwithNav from '../components/TitlewithNav';
import { PlaylistContext } from '../pages/PlaylistContext';
import { Link } from 'react-router-dom';

export default function SelectPlaylistName() {
    const { playlistData, setPlaylistData } = useContext(PlaylistContext);

    // State to store the selected number of songs
    const [playlistName, setPlaylistName] = useState('');

    // Function to handle changes in the song count
    const handlePlaylistNameChange = (event) => {
        setPlaylistName(event.target.value);
    };

    // Function to add a name to the playlist
    const addName = () => {
        console.log('Playlist name:', playlistName);
        setPlaylistData({ ...playlistData, playlistName });
    };

    // Function to generate a random name for the playlist
    const generateRandomName = () => {
        const randomName = 'Random Playlist';
        setPlaylistName(randomName);
        setPlaylistData({ ...playlistData, playlistName: randomName });
    };

    return (
        <div>
            <HeaderwithNav />
            <div className='select-name-page'>
                <h3 className='h3-title'>Name your Playlist</h3>
                <input
                    id='enter-name'
                    type="text"
                    placeholder="Enter Playlist Name"
                    value={playlistName}
                    onChange={handlePlaylistNameChange}
                />
              <div id='name-btn-container'>
                    <button type="button" id='add-name-btn' onClick={addName}>Add Name</button>
                    <button type="button" id='random-name-btn' onClick={generateRandomName}>Random Name</button>
                </div>
                <p id='playlist-name'>{playlistName}</p>
            </div>
            <div className="gen-btn-container">
                <Link to="/SelectSongCount"><button id='back-btn'>Back</button></Link>
                <Link to="/GeneratePlaylist"><button id='next-btn'>Generate Playlist</button></Link>
            </div>
        </div>
    );
}