import { Outlet } from "react-router-dom";
import Cookies from 'js-cookie'
import { SpotifyApiContext } from "react-spotify-api";
import Footer from "./components/Footer";
import React, { createContext, useContext } from "react";
import { PlaylistProvider } from './pages/PlaylistContext';

import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

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
    <ApolloProvider client={client}>
      <TokenProvider>
        <PlaylistProvider>
          <main>
            <Outlet />
            <Footer />
          </main>
        </PlaylistProvider>
      </TokenProvider>
    </ApolloProvider>
  );
};

export default App;