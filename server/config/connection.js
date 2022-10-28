const mongoose = require('mongoose')
require('dotenv').config()



mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
.then(() => console.log('MongoDB Atlas connection to Posterize database successful'))
.catch(err => console.log(err))



module.exports = mongoose.connection
