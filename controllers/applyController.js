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
        if (new Date(verifyJob.deadline) < new Date().setHours(0, 0, 0, 0)) {
            return res.status(500).send({ message: 'Application closed!', success: false });
        }

        // checking is already applied
        const isAlreadyApplied = await Job.findOne({ "candidates": req.user.id });
        if (isAlreadyApplied) return res.status(500).send({ message: 'Already applied!', success: false });

        // verify candidate role
        if (req.user.role !== 'candidate') return res.status(404).send({ message: 'Candidate not found!', success: false });

        // saving apply
        const apply = new Apply({ 
            ...req.body,
            candidate: req.user.id, 
            job : id,
            resumeURL: req.protocol + '://' + req.get('host') + '/' + req.file.path
        });
        const result = await apply.save();

        // if data not saved then throw error
        if (!result._id) return res.status(500).send({ message: 'Error', success: false });

        //push apply and candidate id to job 
        await Job.findOneAndUpdate({ _id: id }, {
            $push: {
                candidates: result.candidate,
                applyId: result._id
            }
        }, { new: true })

        //push job id to user 
        await User.findOneAndUpdate({ _id: req.user.id }, {
            $push: {
                appliedJobs: result._id
            }
        }, { new: true })
        res.send({ data: result, message: 'Successfully created job', success: true });
    } catch (error) {
        res.status(500).send({ error: error.message, message: 'Server side error', success: false });
    }
}

module.exports = { apply }