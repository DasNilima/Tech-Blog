const express = require('express')
const router = express.Router()
const auth = require('../middleware/defineCurrentUser');


const {
    getAllUser,
    signupUser,
    loginUser,
    getProfile,
    updateUser,
} = require('../controllers/userController')


router.get('/', getAllUser)
router.get('/user/:username', getProfile);
router.post('/signup', [auth], signupUser);
router.post('/login', [auth], loginUser);
router.put('/update', [auth],updateUser);


module.exports = router;