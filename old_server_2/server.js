const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')

require('dotenv').config();

const port = process.env.PORT || 8080

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true})
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Connected to MongoDB')
})

const usersRouter = require('./routes/user.routes')
const entriesRouter = require('./routes/entry.routes')

app.use('/users', usersRouter)
app.use('/entries', entriesRouter)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})