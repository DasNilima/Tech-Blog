const express = require('express')
const router = express.Router()
const auth = require('../middleware/defineCurrentUser');


const {
    getAllUser,
    signup,
    login,
    getProfile,
    updateUser,
} = require('../controllers/userController')



router.get('/', getAllUser)
router.post('/signup', signup)
router.post('/login', login);
router.post('/profile', [auth], getProfile);
router.post('/:id', [auth], updateUser)

module.exports = router;