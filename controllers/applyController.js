const mongoose = require('mongoose');

const User = require('../models/userSchema');
const Job = require('../models/jobSchema');
const Apply = require('../models/applySchema');

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
        
        // verify candidate
        const verifyCandidate = await User.findOne({ _id: req.body.candidate });
        if (verifyCandidate.role !== 'candidate') return res.status(404).send({ message: 'Candidate not found!', success: false });


        const apply = new Apply(req.body);
        const result = await apply.save();
        

        //push job id to user 
        // await User.findOneAndUpdate({ _id: req.body.createdBy }, {
        //     $push: { createdJobs: result._id }
        // }, { new: true })
        // res.status(200).json(req.files)

        res.send({ verifyJob, message: 'Successfully created job', success: true });
    } catch (error) {
        res.status(500).send({ error: error.message, message: 'Server side error', success: false });
    }
}


module.exports = { apply }