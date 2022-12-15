const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,

    },
    content: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: 'http://placekitten.com/350/350',
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
    categories: {
        type: Array,
        required: false,
    },
    createdDate: {
        type: Date

    }
});

module.exports = mongoose.model('Blog', blogSchema)
