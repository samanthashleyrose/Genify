import React, { useEffect, useContext, useState } from 'react';
import { PlaylistContext } from './PlaylistContext';
import HeaderwithNav from '../components/TitlewithNav';
import Cookies from 'js-cookie'
import { useMutation } from '@apollo/client';
import { CREATE_PLAYLIST } from '../utils/mutations';
import spotifyLogo from '../assets/imgs/spotify-logo.png'

export default function GeneratePlaylist() {

    const [token] = React.useState(Cookies.get("spotifyAuthToken"));
    const { playlistData } = useContext(PlaylistContext);
    const [playlist, setPlaylist] = useState();

    const [createPlaylist, { data }] = useMutation(CREATE_PLAYLIST);

    // Retrieves connected user's Spotify username
    const fetchUserId = async () => {
        // SPOTIFY WEB API DESCRIPTION: Get detailed profile information about the current user (including the current user's username).
        try {
            const response = await fetch('https://api.spotify.com/v1/me', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const userData = await response.json();
            const userId = userData.id;
            return userId;
        } catch (error) {
            console.error('Error fetching user ID:', error);
        }
    };

    // Searches for tracks based off of user's selections
    const fetchTracks = async () => {
        // SPOTIFY WEB API DESCRIPTION: Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks. If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details.
        const response = await fetch(`https://api.spotify.com/v1/recommendations?seed_genres=${playlistData.genres.join(',')}&seed_artists=${playlistData.artists.map(artist => artist.id).join(',')}&limit=${playlistData.songCount}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        console.log('API Response:', data);

        // Log playlist name and its added tracks
        const playlistInfo = `Generated Playlist\n-----------\nPlaylist Name: ${playlistData.playlistName}\n-----------\nSongs(Tracks): ${data.tracks.map(track => track.name).join(', ')}`;
        console.log(playlistInfo);
        
        return data.tracks;
    };

    // Generates playlist based off of user's selections stored in PlaylistContext
    const generatePlaylist = async () => {
        try {
            // Fetch user ID
            const userId = await fetchUserId();

            // Fetch tracks
            const tracks = await fetchTracks();

            // Create playlist
            // SPOTIFY WEB API DESCRIPTION: Create a playlist for a Spotify user. (The playlist will be empty until you add tracks.) Each user is generally limited to a maximum of 11000 playlists.
            const playlistResponse = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    name: playlistData.playlistName,
                    public: true,
                })
            });
            
            const playlistDataResponse = await playlistResponse.json();
            console.log(playlistDataResponse);
            const playlistId = playlistDataResponse.id;

            // Add tracks to playlist
            // SPOTIFY WEB API DESCRIPTION: Add one or more items to a user's playlist.
            await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    uris: tracks.map(track => track.uri)
                })
            });

            // Update the UI with the generated playlist details
            setPlaylist(playlistDataResponse);
            createPlaylist(
                {
                    variables: {
                        spotify_id: playlistDataResponse.id,
                        name: playlistDataResponse.name,
                    }
                })
        } catch (error) {
            console.error('Error generating playlist:', error);
        }

    };

    useEffect(() => {
        generatePlaylist();
    }, [token, playlistData]);


    return (
        <div>
            <HeaderwithNav />
            <div className='generate-playlist-page'>
                <h3 className='h3-title'>Generated Playlist</h3>
                {playlist ? (
                    <div className="playlists-container">
                        <div className="generated-playlist">
                            <img src={spotifyLogo} className='playlist-img' />
                            <h4 className='playlist-name'>{playlistData.playlistName}</h4>
                        </div>
                    </div>
                ) : (
                    <p id='loading'>loading...</p>
                )}
                <h3 className='h3-title'>About this Playlist</h3>
                <p className='p-title'>genres: {playlistData.genres.join(', ')}</p>
                <p className='p-title'>artists: {playlistData.artists.map(artist => artist.name).join(', ')}</p>
                <p className='p-title'>{playlistData.songCount} songs</p>
            </div>
        </div>
    );
}