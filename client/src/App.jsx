import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import React from 'react'

import { SpotifyApiContext } from 'react-spotify-api'
import Cookies from 'js-cookie'

import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import 'react-spotify-auth/dist/index.css'

const App = () => {
  const [token, setToken] = React.useState(Cookies.get("spotifyAuthToken"))
  
  return (
    <main>
      <Outlet />
      <Footer />
    </main>
  )
}

export default App;