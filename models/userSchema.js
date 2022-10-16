const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { 
        type: String, 
        required: [true, 'Name filed is required'] 
    },
    email: { 
        type: String, 
        required: [true, 'Email filed is required'] 
    },
    password: { 
        type: String, 
        required: [true, 'Password filed is required'] 
    },
    role: { 
        type: String, 
        required: [true, 'Role filed is required'], 
        enum: {
            values: ['admin', 'hr', 'candidate'],
            message: "role value can not be {VALUE}, must be admin/hr/candidate"
        }
    },
}, { timestamps: true });

const User = new mongoose.model("User", userSchema);
module.exports = User