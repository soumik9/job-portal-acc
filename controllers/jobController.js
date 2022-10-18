const User = require('../models/userSchema');
const Job = require('../models/jobSchema');

// hr - 634e6872178f9759613f4f21 - hr@gmail.com -abcabc
// candidate - 634e689f178f9759613f4f24 - candidate@gmail.com - abcabc

const index = async (req, res) => {
    try {
        const findUser = await User.findOne({ email: req.body.email });
        if (findUser) return res.status(500).send({ message: 'Already exists', success: false });

        const user = new User(req.body);
        await user.save();
        res.send({ user, message: 'Successfully created user', success: true });
    } catch (error) {
        res.status(500).send({ error: error.message, message: 'Server side error', success: false });
    }
}

const create = async (req, res) => {
    try {
        const job = new Job(req.body);
        const result = await job.save();

        if (!result._id) return res.status(500).send({ message: 'Error', success: false });

        //push job id to user 
        await User.findOneAndUpdate({ _id: req.body.createdBy }, {
            $push: { createdJobs: result._id }
        }, { new: true })

        res.send({ job, message: 'Successfully created job', success: true });
    } catch (error) {
        res.status(500).send({ error: error.message, message: 'Server side error', success: false });
    }
}

module.exports = { index, create }