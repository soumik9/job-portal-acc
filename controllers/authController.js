const User = require('../models/userSchema');

const signup = async (req, res) => {
    try {
        const findUser = await User.findOne({ email: req.body.email });
        if(findUser) return res.status(500).send({ message: 'Already exists', success: false });

        const user = new User(req.body);
        await user.save();
        res.send({ user, message: 'Successfully created user', success: true });
      } catch (error) {
        res.status(500).send({ error: error.message, message: 'Server side error', success: false });
      }
}

module.exports = { signup }