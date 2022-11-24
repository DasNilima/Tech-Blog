import bcrypt from 'bcrypt';
import jwt from 'json-web-token'
import dotenv from 'dotenv';
import User from "../models/user.js";


dotenv.config()

// SIGNUP

export const signup = async (req, res) => {
    const { name, email, password } = req.body;
    
    let existingUser;
    try {
        existingUser = await User.findOne({ email }); // check the validation
    } catch(err) {
        return console.log(err);
    }
    if (existingUser) {
        return res.status(400).json({message: "User Already Exists! Login Instead"})
    }
    const hashedPassword = await bcrypt.hash(password, 10); // Hash password before saving in database
    const user = new User({ //create a new user
        name,
        email,
        password: hashedPassword,
        blog: [],
    });

    try {
        await user.save(); // save to db
    } catch (err) {
        return console.log(err)
    }
    return res.status(201).json({ user });
}


//LOGIN

export const login = async (req, res) => {
    const { email, password } = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({ email }); // check the validation
    } catch(err) {
        return console.log(err);
    }
    if (!existingUser) {
        return res.status(404).json({message: "User does not match"})
    }
    const isPasswordCorrect = bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) {
        return res.status(400).json({ message: "Wrong credentials!" });
    }
    return res.status(200).json({ message: "Login Successful", user: existingUser });
}