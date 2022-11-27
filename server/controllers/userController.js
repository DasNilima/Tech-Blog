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

// SIGNUP
const saltRounds = parseInt(process.env.SALT_ROUNDS);

const signup = async (req, res) => {
    const { name, email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
        return res.status(400).send({error: "User already exists"});
    }
    bcrypt.hash(password, saltRounds, async(err, hash) => {
        if(err){
            return res.status(500).send({error: "Internal server error"});
        }
        try{
            const newUser = await User.create({name, email, password: hash});
            return res.status(201).send({user: newUser});
        }
        catch(err){
            return res.status(500).send({error: "Internal server error"});
        }
    });
};


//LOGIN

const login = async (req, res) => {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });

    if (!user) {
        return res.status(404).send({ message: "User not found" });
    }
    bcrypt.compare(password, user.password, async (err, result) => {
        if (err) {
            return res.status(500).send({ message: "Internal server error" });
        }
        if (!result) {
            return res.status(401).send({ message: "Invalid credentials" });
        }// create a JWT on log in
        await jwt.encode(process.env.JWT_SECRET, { id: user.userId })
        res.json({ user: user, token: result.value })  
    });
}

const getProfile = async (req, res) => {

}

const updateUser = async (req, res) => {

}

module.exports = {
    getAllUser,
    signup,
    login,
    getProfile,
    updateUser
}
