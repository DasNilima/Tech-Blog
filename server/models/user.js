const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        requried: true,
        unique: true,
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
        default: "",
    },
    blogs: [{  type: mongoose.Types.ObjectId, ref: "blog"}],
}
);

module.exports = mongoose.model('user', userSchema)
