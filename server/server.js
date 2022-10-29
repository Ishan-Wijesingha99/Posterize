const { ApolloServer } = require('apollo-server-express')
const { authMiddleware } = require('./utils/auth')

const typeDefs = require('./schemas/typeDefs')
const resolvers = require('./schemas/resolvers')

const { authRoutes } = require('./routes/')

const express = require('express')
const path = require('path')
const db = require('./config/connection')
const cors = require('cors')



const app = express()
const PORT = process.env.PORT || 4000



app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use('/api', authRoutes)











if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')))
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})



const server = new ApolloServer({ typeDefs, resolvers, context: authMiddleware })

server.applyMiddleware({ app })

db.once('open', () => app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`)))