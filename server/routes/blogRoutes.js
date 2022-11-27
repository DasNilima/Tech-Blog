const express = require('express');
const router = express.Router()
const auth = require('../middleware/defineCurrentUser');

const {
    getBlogs,
    createBlog,
    updateBlog,
    deleteBlog,
    getBlogById,
    getByUserId
} = require('../controllers/blogController')

router.get('/', [auth], getBlogs)

router.post('/create', [auth], createBlog)

router.put('/:id', [auth], updateBlog)

router.delete('/:id', [auth], deleteBlog)

router.get('/:id', [auth], getBlogById)

router.get('/user/:id', [auth], getByUserId)

module.exports = router;