import mongoose from "mongoose";

const userSchema = mongoose.Schema({
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
    blogs: [{ type: mongoose.Types.ObjectId, ref: "Blog", required: true}],
});

const user = mongoose.model('user', userSchema)

export default user;

