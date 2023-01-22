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
        // const salt = await bcrypt.genSalt();
        // const hashedPassword = await bcrypt.hash(request.body.password, salt);
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

const getProfile = async (request, response) => {
    const { username } = request.params;
    try {
        if (!username) return response.status(501).send({ error: "Invalid Username" });
        User.findOne({ username }, function (err, user) {
            if (err) return response.status(500).send({ err });
            if (!user) return response.status(501).send({ error: "Couldn't Find the User" });
              /** remove password from user */
            // mongoose return unnecessary data with object so convert it into json
            const { password, ...rest } = Object.assign({}, user.toJSON())
            
            return response.status(201).send(rest);
        })
    } catch (error) {
        return response.status(404).send ({ error: "Cannot Find User Data"})
    }
}

const updateUser = async (request, response) => {
    try {
        const id = request.query.id;
        if (id) {
            const body = request.body;

            // update the data
            User.updateOne({ _id: id }, body, function (err, data) {
                if (err) throw err;
                return response.status(201).send({ message: "Profile Updated...!" });
            })
        } else {
            return response.status(401).send({ error: "User Not Found...!" });
        }
    }
    catch (error) {
        return response.status(401).send({ error });
    }
}


module.exports = {
    getAllUser,
    loginUser,
    signupUser,
    getProfile,
    updateUser
}
