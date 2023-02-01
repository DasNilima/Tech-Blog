const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    photoURL: {
        type: String,
        default: ''
    },
    blogs: [{ type: mongoose.Types.ObjectId, ref: "blog", required: true }],
}
);

module.exports = mongoose.model('user', userSchema)
