const express = require('express')
const router = express.Router()

const {
    getAllUser,
    signupUser,
    loginUser,
} = require('../controllers/authController')


router.get('/users', getAllUser);
router.post('/signup', signupUser);
router.post('/login', loginUser);


module.exports = router;