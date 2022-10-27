const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// create user (register)
router.post('/signup', async (req, res) => {

  // check if username exists using if statement, do the same for email and password, return an error if it is not present
  if(!req.body.username) return res.json({ error: 'Type in valid username' })

  if(!req.body.email) return res.json({ error: 'Type in valid email' })

  if(!req.body.password) return res.json({ error: 'Type in valid password' })

  const hashedPassword = bcrypt.hashSync(req.body.password, 10)

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword
  })

  try {
    await newUser.save()

    res.status(200).json(newUser) 
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})



// LOGIN 
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })

    if(!user) return res.status(500).json({ error: 'Email does not exist in our database'})

    const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password)

    if(!isPasswordCorrect) return res.status(500).json({ error: 'password incorrect'})

    // if email and password are correct, then we should sign a JWT and give it to this logged in user
    const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '2h' })

    res.status(200).json({ user, accessToken })
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})


module.exports = router