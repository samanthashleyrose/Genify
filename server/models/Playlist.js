const { Schema, model } = require('mongoose');

const playlistSchema = new Schema(
    {
        id: {
            type: Schema.Types.ObjectId,
        },
        spotify_id: {
            type: String,
        },
        name: {
            type: String,
            required: true,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

const Playlist = model('Playlist', playlistSchema);

module.exports = Playlist;