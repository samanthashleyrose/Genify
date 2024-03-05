import { Outlet } from "react-router-dom";
import Cookies from 'js-cookie'
import { SpotifyApiContext } from "react-spotify-api";
import Footer from "./components/Footer";
import React, { createContext, useContext } from "react";
import { PlaylistProvider } from './pages/PlaylistContext';

const tokenContext = createContext();

export const useTokenContext = () => useContext(tokenContext);

const TokenProvider = (props) => {
  const [token, setToken] = React.useState(Cookies.get("spotifyAuthToken"));
  return (
    <SpotifyApiContext.Provider value={token}>
      <tokenContext.Provider value={{ token, setToken }} {...props} />
    </SpotifyApiContext.Provider>
  );
};

const App = () => {
  return (
    <TokenProvider>
      <PlaylistProvider>
      <main>
        <Outlet />
        <Footer />
      </main>
      </PlaylistProvider>
    </TokenProvider>
  );
};

export default App;