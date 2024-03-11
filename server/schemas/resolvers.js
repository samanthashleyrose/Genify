const User = require('../models/User');
const Playlist = require('../models/Playlist');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    getUser: async (parent, { username }) => {
        return User.findOne({ username })
    }
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
        throw AuthenticationError;
      }

      const correctPassword = await user.isCorrectPassword(password);

      if (!correctPassword) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },
    addPlaylist: async (parent, { playlist }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { playlists: playlist._id } },
          { new: true }
        ).populate('generatedPlaylists');

        return updatedUser;
      }

      throw new AuthenticationError;
    },
  },
};

module.exports = resolvers;