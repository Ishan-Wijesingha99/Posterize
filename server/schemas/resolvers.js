const { User } = require('../models/User')
const jwt = require('jsonwebtoken')



const resolvers = {
  Query: {
    
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const newUser = await User.create({ username, email, password })

      const { username: userUsername, email: userEmail, _id: userId } = newUser

      const payload = { userUsername, userEmail, userId }

      const token = jwt.sign({ data: payload }, process.env.JWT_SECRET_KEY, { expiresIn: '2h'})

      return { token, newUser }
    }
  }
}



module.exports = resolvers