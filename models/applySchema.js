const mongoose = require('mongoose');
const valid = require("validator");

const applySchema = mongoose.Schema({
    job: {
        type: mongoose.Types.ObjectId,
        ref: "Job"
    },
    candidate: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    resumeURL: {
        type: String,
        required: [true, 'Resume required'],
        // validate: [valid.isURL, "wrong url"]
    },
}, { timestamps: true });

const Apply = new mongoose.model("Apply", applySchema);
module.exports = Apply