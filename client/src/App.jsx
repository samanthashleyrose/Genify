// import { Outlet } from 'react-router-dom';
// import Footer from './components/Footer';
// import React from 'react'

// const App = () => {
//   return (
//     <main>
//       <Outlet />
//       <Footer />
//     </main>
//   )
// }

// export default App;

import { Outlet } from "react-router-dom";
import Cookies from 'js-cookie'
import { SpotifyApiContext } from "react-spotify-api";
import Footer from "./components/Footer";
import React, { createContext, useContext } from "react";

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
      <main>
        <Outlet />
        <Footer />
      </main>
    </TokenProvider>
  );
};

export default App;