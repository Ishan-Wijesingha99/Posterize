const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()



const app = express()
const PORT = process.env.PORT || 4000



const { 
  authRoutes,
  cartRoutes,
  orderRoutes,
  productRoutes,
  userRoutes
} = require('./routes')




app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/auth', authRoutes)


mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('MongoDB Atlas connection to Posterize database successful'))
.catch(err => console.log(err))



app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`))


