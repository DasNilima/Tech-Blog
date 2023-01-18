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


const signupUser = async (request, response) => {
  try {
      const hashedPassword = await bcrypt.hash(request.body.password, 10);
      
      const user = { username: request.body.username, email: request.body.email, password: hashedPassword }
      
      const newUser = new User(user);
      
      await newUser.save();
      
      return response.status(200).json({ msg: 'Signup successfull' });
      } catch (error) {
          
      return response.status(500).json({ msg: 'Error while signing up user' });
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
        const result = await jwt.encode(process.env.JWT_SECRET, { id: user.userId })
        response.status(200).json({ user: user, token: result.value })  
    }
}

module.exports = {
    getAllUser,
    loginUser,
    signupUser,
}
