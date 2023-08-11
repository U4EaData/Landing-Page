const router = require('express').Router();
let User = require('../models/user.model')


router.route('/').get((req, res) => { // GET all users
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req, res) => { // GET by id
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => { // POST request for new user
    const email = req.body.email
    const password = req.body.password
    const fullname = req.body.fullname

    // const duplicate = await User.findOne({ username }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate username' })
    }


    const newUser = new User({fullname:fullname, password:password, email:email})
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('error: '+ err))
})

router.route('/:id').put((req, res) => { // PUT by id
    User.findById(req.params.id)
        .then(user => {
            if (!user) {
                return res.status(404).json('User not found');
            }
            user.fullname = req.body.fullname || user.fullname;
            user.password = req.body.password || user.password;
            user.email = req.body.email || user.email;

            user.save()
                .then(() => res.json('User updated'))
                .catch(err => res.status(400).json('Error updating user: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => { // DELETE by id
    User.findByIdAndDelete(req.params.id)
        .then(user => res.json('User deleted'))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router