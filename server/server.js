require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const { authMiddleware } = require('./utils/auth');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
// const authRoutes = require('./routes/index');

const PORT = process.env.PORT || 3027;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers
});

const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use('/graphql', expressMiddleware(server, {
    context: authMiddleware
  }));

  // Serve client/build as static assets
  // app.use(express.static(path.join(__dirname, '../client')));

  // // Route handler for the root URL
  // app.get('/', (req, res) => {
  //   res.sendFile(path.join(__dirname, '../client', 'index.html'));
  // });

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  db.once('open', () => {
    // app.get('/callback', async (req, res) => {
    //   try {
    //     const { code } = req.query;

    //     // const spotifyApi = new SpotifyWebApi({
    //     //   clientId: process.env.SPOTIFY_CLIENT_ID,
    //     //   clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    //     //   redirectUri: 'http://localhost:3027/callback',
    //     // });

    //     // const data = await spotifyApi.authorizationCodeGrant(code);
    //     // const { access_token, refresh_token } = data.body;

    //     res.send('Authorization successful! You can close this window.');
    //   } catch (error) {
    //     console.log('Something went wrong!', error);
    //     res.status(500).send('Internal Server Error');
    //   }
    // });

    app.listen(PORT, () => {
      console.log(`🌍 Now listening on http://localhost:${PORT}/`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

startApolloServer();