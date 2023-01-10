const express = require('express');
const router = express.Router()
const auth = require('../middleware/defineCurrentUser');

const {
    getAllBlogs,
    getBlogById,
    getByUserId,
    createBlog,
    updateBlog,
    deleteBlog,
} = require('../controllers/blogController')



router.get('/blogs', [auth], getAllBlogs);

router.get('/blog/:id', [auth], getBlogById);

router.get('/user/:id', [auth], getByUserId);

router.post('/create', [auth], createBlog);

router.put('/update/:id', [auth], updateBlog);

router.delete('/delete/:id', [auth], deleteBlog);



module.exports = router;