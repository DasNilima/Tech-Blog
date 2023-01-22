const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        requried: true,
    },
    email: {
        type: String,
        requried: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
        default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    blogs: [{ type: mongoose.Types.ObjectId, ref: "blog", required: true }],
}
);

module.exports = mongoose.model('user', userSchema)
