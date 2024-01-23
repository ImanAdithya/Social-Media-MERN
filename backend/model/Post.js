const mongoose = require('mongoose');

const PostModel = mongoose.Schema(
    {
        "des": {
            required: true,
            type: String
        },
        "image": {
            type: String
        },
        "userName": {
            required: true,
            type: String
        },
        "userImage": {
            type: String
        }
    },
    { versionKey: false }
);


const Post = mongoose.model('Post', PostModel);

module.exports = Post;
