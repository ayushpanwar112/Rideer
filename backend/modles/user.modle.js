const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [4, "First name should be more than 4 characters"],
        },
        lastname: {
            type: String,
            required: true,
            minlength: [4, "Last name should be more than 4 characters"],
        },
    },
    password: {
        type: String,
        required: true,
        select: false,
        minlength:[6,'Password length should be greater than 5']
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    socketId: {
        type: String,
    },
});

// Instance methods
userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET,{expiresIn:'24h'});
    return token;
};

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// Static methods
userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
};

const userModel=mongoose.model('user', userSchema);

module.exports = userModel;
