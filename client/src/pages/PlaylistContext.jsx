import React, { createContext, useState } from 'react';

export const PlaylistContext = createContext();

export const PlaylistProvider = ({ children }) => {
    const [playlistData, setPlaylistData] = useState({
        genres: [],
        artists: [],
        playlistName: '',
        songCount: null
    });

    const setPlayListLeeWants = (data) => {
        setPlaylistData(data)
        console.log(data);
    }

    return (
        <PlaylistContext.Provider value={{ playlistData, setPlaylistData : setPlayListLeeWants }}>
            {children}
        </PlaylistContext.Provider>
    );
};