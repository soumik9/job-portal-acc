const User = require('../models/userSchema');
const Job = require('../models/jobSchema');

// hr - 634e6872178f9759613f4f21 - hr@gmail.com -abcabc
// candidate - 634e689f178f9759613f4f24 - candidate@gmail.com - abcabc

const index = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.send({ datas: jobs, message: 'Successfully loaded data', success: true });
    } catch (error) {
        res.status(500).send({ error: error.message, message: 'Server side error', success: false });
    }
}

const getManagerSpecificJobs = async (req, res) => {
    try {
        const { manager } = req.params;

        // finding user
        const findJobs = await Job.find({ createdBy: manager });
        res.send({ datas: findJobs, message: 'Successfully loaded data', success: true });
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

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const verifyJob = await Job.findOne({ _id: id });

        if (!verifyJob) return res.status(404).send({ message: 'Job not exists', success: false });

        const updatedData = await Job.findOneAndUpdate({ _id: id }, {
            $set: req.body
        }, { runValidators: true });

        res.json({ message: "Job successfully updated", success: true });

    } catch (error) {
        res.status(500).send({ error: error.message, message: 'Failed to update job', success: false });
    }
}


module.exports = { index, getManagerSpecificJobs, create, update }