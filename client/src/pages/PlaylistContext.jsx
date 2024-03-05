import React, { createContext, useState } from 'react';

export const PlaylistContext = createContext();

export const PlaylistProvider = ({ children }) => {
    const [playlistData, setPlaylistData] = useState({
        genres: [],
        artists: [],
        playlistName: '',
        songCount: 5
    });

    return (
        <PlaylistContext.Provider value={{ playlistData, setPlaylistData }}>
            {children}
        </PlaylistContext.Provider>
    );
};