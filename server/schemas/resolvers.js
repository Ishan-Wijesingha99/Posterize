const { AuthenticationError } = require('apollo-server-express')
const { User } = require('../models/User')
const jwt = require('jsonwebtoken')

const resolvers = {
  Query: {
    
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      // create a document in the mongoDB database based of the username, email and password in the args object
      console.log('yello')

      const newUser = await User.create({ username, email, password })

      console.log('yello2')
      
      const { username: userUsername, email: userEmail, _id: userId } = newUser

      console.log('yello3')

      const payload = { userUsername, userEmail, userId }

      console.log('yello4')

      const token = jwt.sign({ data: payload }, process.env.JWT_SECRET_KEY, { expiresIn: '2h'})

      console.log('yello5')

      return { token, newUser }
    }
  }
}

module.exports = resolvers