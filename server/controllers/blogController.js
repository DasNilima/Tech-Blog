const Blog = require('../models/blog');
const User = require('../models/user');


//CreateBlog

const createBlog = async (request, response) => {
    try {
        const blog = new Blog(request.body);
        await blog.save();

        response.status(200).json('Blog saved successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}

//UpdateBlog
// const updateBlog = async (req, res) => {
//     const { title, content } = req.body;
//     const blogId = req.params.id;
//     let blog;
//     try {
//         blog = await Blog.findByIdAndUpdate(blogId, {
//             title,
//             content,
//         });
//     } catch (err) {
//         return console.log(err)
//     }
//     if (!blog) {
//         return res.status(500).json({ message: "Unable to Update the Blog" })
//     }
//     return res.status(200).json({ blog });
// }

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
//getAllBlogs
const getAllBlogs = async (req, res) => {
    let username = req.query.username
    let category = req.query.category;
    let blogs;
    try {
        if (username)
            blogs = await Blog.find({ username: username }).populate("user");
        else if (category)
            blogs = await Blog.find({ categories: category});
        else
            blogs = await Blog.find({});
        res.status(200).json({ blogs })
    } catch (error) {
        res.status(500).json(error)
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

module.exports = {
    deleteBlog,
    updateBlog,
    createBlog,
    getAllBlogs,
    getBlogById,

}