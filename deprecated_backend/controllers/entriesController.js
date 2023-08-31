const Entry = require('../models/Entry')
const User = require('../models/User')
const asyncHandler = require('express-async-handler')

// @desc Get all entries 
// @route GET /entries
// @access Private
const getEntries = asyncHandler(async (req, res) => { // gets either all entries in the DB or all the entries for a specific user, based off what is passed in the req.body
    const { userID } = req.query;
    console.log(req.query)
    if (!userID){
        // Get all entries from MongoDB
        const entries = await Entry.find().lean()

        // If no entries 
        if (!entries?.length) {
            return res.status(400).json({ message: 'No entries found' })
        }

        res.json(entries)
    } else {
        // Find all entries with userID matching the request's userID
        const userEntries = await Entry.find({ userID }).lean();

        // If no entries for the specified userID: there was really no point in having the following code so I commented it
        // if (!userEntries?.length) {
        //     return res.status(400).json({ message: 'No entries found for the specified user' });
        // }

        res.json(userEntries);
    }
})

// @desc Create new entries
// @route POST /entries
// @access Private
const createNewEntry = asyncHandler(async (req, res) => {
    const { userID, feel, boost, thingDuring, startTime, endTime } = req.body

    // Confirm data
    if (!userID || !feel || !boost || !thingDuring || !startTime || !endTime) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Create and store the new entry 
    const entry = await Entry.create({ userID, feel, boost, thingDuring, startTime, endTime })

    if (entry) { // Created 
        return res.status(201).json({ message: 'New entry created' })
    } else {
        return res.status(400).json({ message: 'Invalid entry data received' })
    }

})

// TODO: maybe not in this exact method, but add functionality that deletes all entries for one user
// @desc Delete a entries
// @route DELETE /entries
// @access Private
const deleteEntry = asyncHandler(async (req, res) => {
    const { id } = req.body

    // Confirm data
    if (!id) {
        return res.status(400).json({ message: 'Entry ID required' })
    }

    // Confirm entry exists to delete 
    const entry = await Entry.findById(id).exec()

    if (!entry) {
        return res.status(400).json({ message: 'Entry not found' })
    }

    const result = await entry.deleteOne()

    const reply = `Entry with ID ${result._id} deleted`

    res.json(reply)
})

module.exports = {
    getEntries,
    createNewEntry,
    deleteEntry
}