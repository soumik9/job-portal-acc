const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
    title: { 
        type: String, 
        required: [true, 'Title field is required'] 
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    type: { 
        type: String, 
        required: [true, 'Type field is required'] 
    },
    location: { 
        type: String, 
        required: [true, 'Location field is required'] 
    },
    deadline: { 
        type: Date, 
        required: [true, 'deadline field is required']
    },
    salaryRange: { 
        type: String, 
        required: [true, 'Salary range field is required'] 
    },
    candidates: [{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }],
    applyId: [{
        type: mongoose.Types.ObjectId,
        ref: "Apply"
    }],
}, { timestamps: true });

const Job = new mongoose.model("Job", jobSchema);
module.exports = Job