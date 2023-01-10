const Blog = require('../models/blog');
const User = require('../models/user');


//CreateBlog

const createBlog = async (request, response) => {
    const { user } = request.body;
    try {
        const existingUser = await User.findById(user);
        const blog = new Blog(request.body);
        await blog.save();
        existingUser.blogs.push(blog);
        await existingUser.save();
        response.status(200).json('Blog saved successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}



//getAllBlogs
const getAllBlogs = async (request, response) => {
    let username = request.query.username
    let category = request.query.category;
    let blogs;
    try {
        if (username)
            blogs = await Blog.find({ username: username }).populate("user");
        else if (category)
            blogs = await Blog.find({ categories: category});
        else
            blogs = await Blog.find({});
        response.status(200).json({ blogs })
    } catch (error) {
        response.status(500).json(error)
    }
}
// getBlogById

const getBlogById = async (request, response) => {
    try {
        const blog = await Blog.findById(request.params.id);

        response.status(200).json({blog});
    } catch (error) {
        response.status(500).json(error)
    }
}

//Update Blog
const updateBlog  = async (request, response) => {
    try {
        const blog = await Blog.findById(request.params.id);

        if (!blog) {
            response.status(404).json({ msg: 'Blog not found' })
        }
        
        await Blog.findByIdAndUpdate( request.params.id, { $set: request.body })

        response.status(200).json('blog updated successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}
//deleteBlog
const deleteBlog = async (request, response) => {
    try {
        const blog = await Blog.findById(request.params.id);
        
    if (!blog) {
            response.status(404).json({ msg: 'Blog not found' })
        }
        await blog.delete();

    return response.status(200).json('blog deleted successfully');
    } catch (error) {
        response.status(500).json(error)
    }
}

const getByUserId = async (request, response, next) => {
    const userId = request.params.id;
    let userBlogs;
    try {
        userBlogs = await User.findById(userId).populate("blogs");
        } catch (err) {
        return console.log(err);
        }
        if (!userBlogs) {
        return response.status(404).json({ message: "No Blog Found" });
        }
        return response.status(200).json({ user: userBlogs });
};
module.exports = {
    deleteBlog,
    updateBlog,
    createBlog,
    getAllBlogs,
    getBlogById,
    getByUserId,

}