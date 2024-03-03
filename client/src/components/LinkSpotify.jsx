import React, { useEffect, useState }  from 'react'
import { SpotifyApiContext } from 'react-spotify-api'
import Cookies from 'js-cookie'
import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import 'react-spotify-auth/dist/index.css'

const dev = 'clientID'

const App = () => {
    // const [token, setToken] = React.useState(Cookies.get("spotifyAuthToken"))

    const [spotifyAuthToken, setSpotifyAuthToken] = useState()

    useEffect(() => {
        setSpotifyAuthToken(Cookies.get('spotifyAuthToken'))
        console.log(Scopes.all)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Cookies.get('spotifyAuthToken')])

    const logout = () => {
        Cookies.remove('spotifyAuthToken', {
            path: dev ? '' : 'react-spotify-auth'
        })
        window.location = dev ? '/' : '/react-spotify-auth'
    }

    return (
        <div id='link-spotify-container'>
             {Cookies.get('spotifyAuthToken') ? (
                <SpotifyApiContext.Provider value={spotifyAuthToken}>
                    <p>Your spotify is now linked!</p>
                </SpotifyApiContext.Provider>
            ) : (
                // Display the profile page
                <SpotifyAuth
                    redirectUri={
                        dev
                            ? 'http://localhost:3027/callback'
                            : 'http://localhost:3027/Profile'
                    }
                    clientID='clientID'
                    scopes={[
                        Scopes.userReadPrivate,
                        Scopes.userReadEmail,
                        'playlist-modify-public'
                    ]}
                    // onAccessToken={(token) => setToken(token)}
                />
            )}
        </div>
    )
}

export default App;