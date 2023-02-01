const Comment = require('../models/comment');
const user = require('../models/user');

const newComment = async (request, response) => {
    try {
        const comment = await new Comment(request.body);
        comment.save();

        response.status(200).json('Comment saved successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}

const getComments = async (request, response) => {
    try {
        const comments = await Comment.find({ blogId: request.params.id });
        
        response.status(200).json(comments);
    } catch (error) {
        response.status(500).json(error)
    }
}
const deleteComment = async (request, response) => {
    try {
        const comment = await Comment.findById(request.params.id);
        await comment.delete()

        response.status(200).json('comment deleted successfully');
    } catch (error) {
        response.status(500).json(error)
    }
}

module.exports = {
    newComment,
    getComments,
    deleteComment
}
