const User = require('../models/user.js');
const bcrypt = require('bcrypt');
const jwt = require('json-web-token');


const getAllUser = async (req, res) => {
    let users;
    try {
        users = await User.find();
    } catch (err) {
        console.log(err)
    }
    if (!users) {
        return res.status(404).json({ message: "No Users Found" });
    }
    return res.status(200).json({ users})
}

const signupUser = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(req.body.password, salt)
    
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        })
    
        const user = await newUser.save()
        res.status(200).json(user)
        } catch (error) {
        res.status(500).json(error)
        }
}

const loginUser = async (request, response) => {
    const { username, password } = request.body;

    const user = await User.findOne({ username });

    if (!user || !await bcrypt.compare(password, user.password)) {
        response.status(404).json({ 
            message: `Could not find a user with the provided username and password` 
        })
    } else { // create a JWT on log in
        const result = await jwt.encode(process.env.JWT_SECRET, { _id: user.userId })
        response.status(200).json({ user: user, token: result.value, username: user.username   })  
    }
}

module.exports = {
    getAllUser,
    loginUser,
    signupUser,
}
