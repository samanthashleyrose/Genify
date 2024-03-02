const SpotifyWebApi = require('spotify-web-api-node');

// Set up Spotify API client
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: 'http://localhost:3000/callback',
});

module.exports = spotifyApi;