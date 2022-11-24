import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "user",
        required: true,
    },
});

const blog = mongoose.model('blog', blogSchema)

export default blog;

