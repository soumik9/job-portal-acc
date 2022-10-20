const mongoose = require('mongoose');
const validator = require("validator");
const bcrypt = require('bcrypt');

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
        required: [true, 'Password filed is required'],
        // validate: {
        //     validator: (value) =>
        //         validator.isStrongPassword(value, {
        //             minLength: 5,
        //         }),
        //     message: "Password {VALUE} is not strong enough.",
        // },
    },
    confirmPassword: {
        type: String,
        required: [true, "Please confirm your password"],
        validate: {
            validator: function (value) {
                return value === this.password;
            },
            message: "Password didn't matched!",
        },
    },
    role: {
        type: String,
        required: [true, "Please confirm role"],
        enum: {
            values: ['admin', 'hr', 'candidate'],
            message: "role value can not be {VALUE}, must be admin/hr/candidate"
        }

    },
    createdJobs: [{
        type: mongoose.Types.ObjectId,
        ref: "Job"
    }],
    appliedJobs: [{
        type: mongoose.Types.ObjectId,
        ref: "Job"
    }],
}, { timestamps: true });


userSchema.pre("save", function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    const password = this.password;

    const hashedPassword = bcrypt.hashSync(password, 10);

    this.password = hashedPassword;
    this.confirmPassword = undefined;

    next();
});

userSchema.methods.comparePassword = function (password, hash) {
    const isPasswordValid = bcrypt.compareSync(password, hash);
    return isPasswordValid;
};

const User = new mongoose.model("User", userSchema);
module.exports = User