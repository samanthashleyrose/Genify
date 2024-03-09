import { Outlet } from "react-router-dom";
import Cookies from 'js-cookie'
import { SpotifyApiContext } from "react-spotify-api";
import Footer from "./components/Footer";
import React, { createContext, useContext } from "react";
import { PlaylistProvider } from './pages/PlaylistContext';

import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
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