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

// // SIGNUP
// const saltRounds = parseInt(process.env.SALT_ROUNDS);

// const signup = async (req, res) => {
//     const { name, email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (user) {
//         return res.status(400).send({error: "User already exists"});
//     }
//     bcrypt.hash(password, saltRounds, async(err, hash) => {
//         if(err){
//             return res.status(500).send({error: "Internal server error"});
//         }
//         try{
//             const newUser = await User.create({name, email, password: hash});
//             return res.status(201).send({user: newUser});
//         }
//         catch(err){
//             return res.status(500).send({error: "Internal server error"});
//         }
//     });
// };

const signup = async (req, res, next) => {
    const { name, email, password } = req.body;
    let existingUser;
    try {
      existingUser = await User.findOne({ email });
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
      name,
      email,
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
        }
    })// create a JWT on log in
    const result =  jwt.encode(process.env.JWT_SECRET, { id: user.userId }) // getting the userid when logged in
    res.json({ user: user, token: result.value })  
}

// const logout = (req, res, next) => {

//   if (!token) {
//     return res.status(400).json({ message: "Couldn't find token" });
//   }
//   jwt.verify(String(token), process.env.JWT_SECRET_KEY, (err, user) => {
//     if (err) {
//       console.log(err);
//       return res.status(403).json({ message: "Authentication failed" });
//     }
//     return res.status(200).json({ message: "Successfully Logged Out" });
//   });
// };



module.exports = {
    getAllUser,
    login,
    signup,
    // logout
}
