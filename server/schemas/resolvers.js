const User = require('../models/User');
const Playlist = require('../models/Playlist');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
        return User.findById(context.user._id)
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
    createPlaylist: async (parent, { spotify_id, name}, context) => {
      const playlist = await Playlist.create({ spotify_id, name, owner: context.user._id});
      await User.findByIdAndUpdate(context.user._id, {$push: {playlists: playlist._id}})

      return playlist;
    }
  },
};

module.exports = resolvers;