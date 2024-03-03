import React from 'react'
import { SpotifyApiContext } from 'react-spotify-api'
import Cookies from 'js-cookie'
import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import 'react-spotify-auth/dist/index.css'

const App = () => {
    const [token, setToken] = React.useState(Cookies.get("spotifyAuthToken"))

    return (
        <div id='link-spotify-container'>
            {token ? (
                <SpotifyApiContext.Provider value={token}>
                    {/* Your Spotify Code here */}
                    <p>You are authorized with token: {token}</p>
                </SpotifyApiContext.Provider>
            ) : (
                // Display the login page
                <SpotifyAuth
                    redirectUri='http://localhost:3027/callback'
                    clientID='client ID'
                    scopes={[Scopes.userReadPrivate, 'user-read-email', 'playlist-modify-public']} // either style will work
                    onAccessToken={(token) => setToken(token)}
                />
            )}
        </div>
    )
}

export default App;