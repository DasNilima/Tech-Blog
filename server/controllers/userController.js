// const User = require('../models/user.js');
// const bcrypt = require('bcrypt');


// const getProfile = async (req, res, next) => {
//   try {
//     const user = await User.findById(req.params.id);
//     res.status(200).json(user);
//   } catch (err) {
//     next(err);
//   }
// }

// const updateUser = async (req, res, next) => {
//   try {
//     const updatedUser = await User.findByIdAndUpdate(
//        req.params.id,
//       { $set: req.body },
//       { new: true }
//     );
//     res.status(200).json(updatedUser);
//   } catch (err) {
//     next(err);
//   }
// }


// module.exports = {
//     getProfile,
//     updateUser
// }
