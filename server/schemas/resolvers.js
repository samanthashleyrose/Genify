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
        throw new AuthenticationError('Incorrect email or password');
      }

      const correctPassword = await user.isCorrectPassword(password);

      if (!correctPassword) {
        throw new AuthenticationError('Incorrect email or password');
      }

      const token = signToken(user);
      return { token, user };
    },
    addPlaylist: async (parent, { name, tracks }, context) => {
      const playlist = await Playlist.create({ name, tracks, owner: context.user._id  });

      await User.findOneAndUpdate
      (
        context.user._id,
        { $addToSet: { playlists: playlist._id } }
      );

      return playlist;
      console.error('Error adding playlist:', error);
      throw new Error('Failed to add playlist.');
    },
  },
};

module.exports = resolvers;