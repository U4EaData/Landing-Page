const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entrySchema = new Schema({
    userID: {
        type: String, 
        required: true,
        unique: false,
    },
    feel: {
        type: String, 
        required: true,
        unique: false,
    },
    boost: {
        type: String, 
        required: true,
        unique: false,
    },
    thingDuring: {
        type: String, 
        required: true,
        unique: false,
    },
    startTime: {
        type: Date, 
        required: true,
        unique: false,
    },
    endTime: {
        type: Date, 
        required: true, // we only make a POST request when we've finished the bin beat, so there will be an end time
        unique: false,
    },
}, {
    timestamps: true
});

const Entry = mongoose.model('Entry', entrySchema)

module.exports = Entry;