const { Schema, model } = require('mongoose');

const playlistSchema = new Schema(
    {
        id: {
            type: String
        },
        name: {
            type: String,
            required: true,
        },
        tracks: {
            type: String,
            required: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        created_at: {
            type: Date,
            default: Date.now,
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