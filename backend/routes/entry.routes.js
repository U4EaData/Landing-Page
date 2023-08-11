const router = require('express').Router();
let Entry = require('../models/entry.model')

router.route('/').get((req, res) => { // GET all entries
    Entry.find()
        .then(entries => res.json(entries))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req, res) => { // GET by id
    Entry.findById(req.params.id)
        .then(entry => res.json(entry))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => { // POST request for new entry
    const userID = req.body.userID
    const feel = req.body.feel
    const boost = req.body.boost
    const thingDuring = req.body.thingDuring
    const startTime = req.body.startTime
    const endTime = req.body.endTime
    const newEntry = new Entry({userID:userID, feel:feel, boost:boost, thingDuring:thingDuring, startTime:startTime, endTime:endTime})
    newEntry.save()
        .then(() => res.json('Entry added!'))
        .catch(err => res.status(400).json('error: '+ err))
})

// no need for a PUT route for this object

// not even really a need for a DELETE route but we ball
router.route('/:id').delete((req, res) => { // DELETE by id
    Entry.findByIdAndDelete(req.params.id)
        .then(entry => res.json('entry deleted'))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router