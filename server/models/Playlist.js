const { Schema, model } = require('mongoose');

const playlistSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        tracks: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Track',
            },
        ],
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

playlistSchema.virtual('songCount').get(function () {
    return this.tracks.length;
});

const Playlist = model('Playlist', playlistSchema);

module.exports = Playlist;