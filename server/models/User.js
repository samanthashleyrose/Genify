const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const playlistSchema = require('./Playlist')

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    // createdPlaylists: [playlistSchema]
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);
 
// Hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.virtual('generatedPlaylistCount').get(function () {
  return this.savedPlaylists.length;
});

const User = model('User', userSchema);

module.exports = User;