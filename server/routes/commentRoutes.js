const express = require('express');
const router = express.Router()
const auth = require('../middleware/defineCurrentUser');

const {
    newComment,
    getComments,
    deleteComment
} = require('../controllers/commentController')

router.post('/comment/new', [auth], newComment);
router.get('/comments/:id', [auth], getComments);
router.delete('/comment/delete/:id', [auth], deleteComment); 

module.exports = router;