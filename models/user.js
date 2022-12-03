

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        requried: true, 
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    blogs: [{  type: mongoose.Types.ObjectId, ref: "Blog"}],
}
);

module.exports = mongoose.model('User', userSchema)
