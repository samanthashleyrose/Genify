import React, { useContext } from 'react';
import { PlaylistContext } from './PlaylistContext';
import HeaderwithNav from '../components/TitlewithNav';
import { Link } from 'react-router-dom';

export default function GeneratePlaylist() {
    const { playlistData } = useContext(PlaylistContext);

    return (
        <div>
            <HeaderwithNav />
            <div className='generate-playlist-page'>
                <h3 className='h3-title'>Generated Playlist</h3>
                <p className='p-title'>genres: {playlistData.genres.join(', ')}</p>
                <p className='p-title'>artists: {playlistData.artists.map(artist => artist.name).join(', ')}</p>
                <p className='p-title'>playlist name: {playlistData.playlistName}</p>
                <p className='p-title'>song count: {playlistData.songCount}</p>
            </div>
            <div className="gen-btn-container">
                <Link to="/"><button id='link-to-spotify-btn'>Add to your Spotify Account</button></Link>
            </div>
        </div>
    );
}