const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('MongoDB Atlas connection to Posterize database successful'))
.catch(err => console.log(err))

const PORT = process.env.PORT || 3001

app.listen(3001, () => console.log('Server listening on port 3001...'))