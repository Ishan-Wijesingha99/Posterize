const router = require('express').Router()
const User = require('../models/User')

// create user (register)
router.post('/signin', async (req, res) => {

  // check if username exists using if statement, do the same for email and password, return an error if it is not present

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })

  try {
    await newUser.save()

    res.status(200).json(newUser) 
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})


module.exports = router