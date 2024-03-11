const { Schema } = require('mongoose');

const playlistSchema = new Schema(
    {
        id: {
            type: Number
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

module.exports = playlistSchema;