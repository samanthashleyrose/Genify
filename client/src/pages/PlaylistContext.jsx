import React, { createContext, useState } from 'react';

export const PlaylistContext = createContext();

export const PlaylistProvider = ({ children }) => {
    const [playlistData, setPlaylistData] = useState({
        genres: [],
        artists: [],
        playlistName: '',
        songCount: null
    });

    const [remainingSelections, setRemainingSelections] = useState(5);

    const setPlayListLeeWants = (data) => {
        setPlaylistData(data)
        console.log(data);
    };

    return (
        <PlaylistContext.Provider value={{ playlistData, setPlaylistData : setPlayListLeeWants, remainingSelections, setRemainingSelections}}>
            {children}
        </PlaylistContext.Provider>
    );
};