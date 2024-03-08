const User = require('../models/User');
const { signToken } = require('../utils/auth');


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
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      console.log(username, email, password);
      const user = await User.create({ username, email, password });
      console.log(user);
      const token = signToken(user);

      return { token, user };
    },

    loginUser: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect email or password');
      }

      const correctPassword = await user.isCorrectPassword(password);

      if (!correctPassword) {
        throw new AuthenticationError('Incorrect email or password');
      }

      const token = signToken(user);
      return { token, user };
    },

  },
};

module.exports = resolvers;
