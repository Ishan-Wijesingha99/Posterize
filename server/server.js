const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()



const app = express()
const PORT = process.env.PORT || 3001



const { 
  authRoutes,
  cartRoutes,
  orderRoutes,
  productRoutes,
  userRoutes
} = require('./routes')



app.use(express.json())



mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('MongoDB Atlas connection to Posterize database successful'))
.catch(err => console.log(err))







app.listen(PORT, () => console.log('Server listening on port 3001...'))


