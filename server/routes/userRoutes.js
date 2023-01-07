const express = require('express')
const router = express.Router()
const auth = require('../middleware/defineCurrentUser');


const {
    getAllUser,
    signup,
    login,
    // logout
} = require('../controllers/userController')



router.get('/', getAllUser)
router.post('/signup',[auth], signup)
router.post('/login',[auth], login);
// router.post('/logout', [auth], logout);


module.exports = router;