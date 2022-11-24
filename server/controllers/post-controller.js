import Post from "../models/post.js";

export const createPost = async (req, res) => {
    try {
        const post = await new Post(req.body);
        post.save();
        res.status(200).json('Post saved successfully');
    } catch (err) {
        res.status(500).json(err);
    }
}



