const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
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
        required: false
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "user",
        required: true,
    },
    username: {
        type: String,
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

module.exports = mongoose.model('blog', BlogSchema)
