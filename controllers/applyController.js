const mongoose = require('mongoose');

const User = require('../models/userSchema');
const Job = require('../models/jobSchema');

const apply = async (req, res) => {
    try {

        const { id } = req.params;

        // checking is id valid
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send({ message: 'Not valid Id!', success: false });

        // finding job
        const verifyJob = await Job.findOne({ _id: id });

        // checking is appplication deadline passed
        if(new Date(verifyJob.deadline) < new Date().setHours(0, 0, 0, 0)){
            return res.status(500).send({ message: 'Application closed!', success: false });
        }
        

        //push job id to user 
        // await User.findOneAndUpdate({ _id: req.body.createdBy }, {
        //     $push: { createdJobs: result._id }
        // }, { new: true })

        res.send({ verifyJob, message: 'Successfully created job', success: true });
    } catch (error) {
        res.status(500).send({ error: error.message, message: 'Server side error', success: false });
    }
}


module.exports = { apply }