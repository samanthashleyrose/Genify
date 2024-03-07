function formatTrack(track) {
    return {
        id: track.id,
        name: track.name,
        artist: track.artists.map(artist => artist.name).join(', '),
        duration_ms: track.duration_ms,
    };
}

module.exports = {
    formatTrack,
};
