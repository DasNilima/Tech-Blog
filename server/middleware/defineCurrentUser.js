const User = require('../models/user');
const jwt = require('json-web-token')

//use Express middleware to look up the logged-in user
async function defineCurrentUser(req, res, next){
    try {
        const [ method, token ] = req.headers.authorization.split(' ')
        if(method == 'Bearer'){
            const result = await jwt.decode(process.env.JWT_SECRET, token)
            const { id } = result.value
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

// module.exports = function(req, res, next){

//     // Check for the token
//     const token = req.header('x-auth-token');

//     // Check if not token
//     if(!token) return res.status(401).json([{message: 'No token, authorization denied', type: 'error'}]);

//     // Verify token
//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);

//         req.user = decoded.user;
//         next();
//     } catch (err) {
//         res.status(401).json([{message: 'Token is not valid', type: 'error'}]);
//     }
// }