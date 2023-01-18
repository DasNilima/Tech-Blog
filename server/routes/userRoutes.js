const express = require('express')
const router = express.Router()
const auth = require('../middleware/defineCurrentUser');


const {
    getAllUser,
    signupUser,
    loginUser,
} = require('../controllers/userController')


router.get('/', getAllUser)
router.post('/signup',[auth], signupUser)
router.post('/login',[auth], loginUser);

module.exports = router;