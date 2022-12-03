const User = require('../models/user');
const jwt = require('json-web-token')

//use Express middleware to look up the logged-in user
async function defineCurrentUser(req, res, next){
    try {
         // Split the authorization header into [ "Bearer", "TOKEN" ]:
        const [authenticationMethod, token] = req.headers.authorization.split(' ')
        
        if (authenticationMethod == 'Bearer') {
            // Decode the JWT
            const result = await jwt.decode(process.env.JWT_SECRET, token)
            // Get the logged in user's id from the payload
            const { id } = result.value
             // Find the user object using their id:
            let user = await User.findOne({ 
                where: {
                    userId: id
                }
            })
            req.currentUser = user
        }
        next()
    } catch(err){
        req.currentUser = null
        next() 
    }
}

module.exports = defineCurrentUser
