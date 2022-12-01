const mongoose = require("mongoose");
const Blog = require('../models/blog');
const User = require('../models/user');


//CreateBlog

const createBlog = async (req, res) => {
    const { title, content, image, user } = req.body;
    
    let existingUser;
    try {
        existingUser = await User.findById(user);
    } catch (err) {
        return console.log(err);
    }
    if (!existingUser) {
        return res.status(400).json({ message: "Unable TO FInd User By This ID" });
    }
    const blog = new Blog({
        title,
        content,
        image,
        user,
    });
    try {
        const session = await mongoose.startSession();
        session.startTransaction();
        await blog.save({ session });
        existingUser.blogs.push(blog);
        await existingUser.save({ session });
        await session.commitTransaction();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err });
    }

    return res.status(200).json({ blog });
};

//UpdateBlog
const updateBlog = async (req, res) => {
    const { title, content } = req.body;
    const blogId = req.params.id;
    let blog;
    try {
        blog = await Blog.findByIdAndUpdate(blogId, {
            title,
            content,
        });
    } catch (err) {
        return console.log(err)
    }
    if (!blog) {
        return res.status(500).json({ message: "Unable to Update the Blog" })
    }
    return res.status(200).json({ blog });
}
//getBlogs
const getAllBlogs = async (req, res) => {
    let blogs;
    try {
        blogs = await Blog.find().populate("user");
    } catch (err) {
        return console.log(err);
    }
    if (!blogs) {
        return res.status(404).json({ message: "No Blogs Found" });
    }
    return res.status(200).json({ blogs})

    }

// getBlogById

const getBlogById = async (req, res) => {
    const id = req.params.id;
    let blog;
    try {
        blog = await Blog.findById(id);
    } catch (err) {
        return console.log(err);
    }
    if (!blog) {
        return res.status(404).json({ message: "No Blog Found" });
    }
    return res.status(200).json({ blog });
}

//deleteBlog
const deleteBlog = async (req, res) => {
    const id = req.params.id;

    let blog;
    try {
        blog = await Blog.findByIdAndRemove(id).populate("user");
        await blog.user.blogs.pull(blog);
        await blog.user.save();
    }
    catch (err) {
        console.log(err);
    }
    if (!blog) {
        return res.status(500).json({ message: "Unable to Delete" });
    }
    return res.status(200).json({ message: "Successfully Delete "})
}

const getByUserId = async (req, res) => {
    const userId = req.params.id;
    let userBlogs;
    try {
        userBlogs = await User.findById(userId).populate("blogs");
    } catch (err) {
        return console.log(err);
    }
    if (!userBlogs) {
        return res.status(404).json({ message: "No Blog Found " });
    }
    return res.status(200).json({ user: userBlogs });
}

module.exports = {
    deleteBlog,
    updateBlog,
    createBlog,
    getAllBlogs,
    getBlogById,
    getByUserId

}