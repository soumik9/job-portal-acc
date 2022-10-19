const User = require('../models/userSchema');
const Job = require('../models/jobSchema');

// hr - 634e6872178f9759613f4f21 - hr@gmail.com -abcabc
// candidate - 634e689f178f9759613f4f24 - candidate@gmail.com - abcabc

const index = async (req, res) => {
    try {
        // copying req query
        const queryObject = { ...req.query };
        const queries = {};

        // excluding fileds
        const excludeFileds = ['sort', 'page', 'limit'];
        excludeFileds.forEach(filed => delete queryObject[filed]);

        // sorting flexiblity
        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ');
            queries.sortBy = sortBy;
        }

        // database query
        const jobs = await Job.find(queryObject).sort(queries.sortBy);
        const total = jobs.length;
        res.send({ total, message: 'Successfully loaded tours', success: true, jobs });
    } catch (error) {
        res.status(500).send({ error: error.message, message: 'Server side error', success: false });
    }
}

const single = async (req, res) => {
    try {
        const { id } = req.params;
        const job = await Job.findOne({ _id: id }).populate('createdBy', '-createdJobs');
        res.send({ message: 'Successfully loaded tours', success: true, job });
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


module.exports = { index, single, getManagerSpecificJobs, create, update }