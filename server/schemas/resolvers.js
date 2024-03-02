const { User } = require('../models/User.js');
const { getUserIdFromToken } = require('../utils/spotifyUtils'); // Implement this function to extract user ID from token
 // Adjust the path as necessary
const spotifyApi = require('../utils/spotifyApi'); // Initialize Spotify API client

const resolvers = {
  Query: {
    getUserInfo: async (_, __, { token }) => {
      try {
        const userId = await getUserIdFromToken(token);
        spotifyApi.setAccessToken(token);
        const userData = await spotifyApi.getUser(userId);
        return {
          id: userData.id,
          displayName: userData.display_name,
          email: userData.email,
        };
      } catch (error) {
        throw new Error('Failed to fetch user information from Spotify API');
      }
    },
  },
};

module.exports = resolvers;
