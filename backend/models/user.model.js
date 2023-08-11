const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String, 
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String, 
        required: true,
        unique: false,
        trim: true,
        minlength: 8 // has to be at least 8 characters
    },
    fullname: {
        type: String, 
        required: true,
        unique: false,
        trim: true,
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema)

module.exports = User;