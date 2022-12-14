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


const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    let existingUser;
    try {
      existingUser = await User.findOne({ username });
    } catch (err) {
      return console.log(err);
    }
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User Already Exists! Login Instead" });
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
  
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      blogs: [],
    });
  
    try {
      await user.save();
    } catch (err) {
      return console.log(err);
    }
    return res.status(201).json({ user });
  };



const login = async (req, res) => {
    const { username, password } = req.body;
    
    const user = await User.findOne({ username });

    if (!user) {
        return res.status(404).send({ message: "Username does not match" });
    }
    bcrypt.compare(password, user.password, async (err, result) => {
        if (err) {
            return res.status(500).send({ message: "Internal server error" });
        }
        if (!result) {
            return res.status(401).send({ message: "Invalid credentials" });
        }
    })// create a JWT on log in
    const result =  jwt.encode(process.env.JWT_SECRET, { id: user.userId }) // getting the userid when logged in
    res.json({ user: user, token: result.value, username: user.username })  
}

module.exports = {
    getAllUser,
    login,
    signup,
}
