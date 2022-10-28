const jwt = require('jsonwebtoken')



const authMiddleware = object => {
  let token = object.req.body.token || object.req.query.token || object.req.headers.authorization

  if (object.req.headers.authorization) token = token.split(' ').pop().trim()

  if (token == null) return object.req

  try {
    const { data } = jwt.verify(token, process.env.JWT_SECRET_KEY, { maxAge: '2h' })
    
    object.req.user = data
  } catch {
    console.log('Invalid token')
  }

  return object.req
}



module.exports = { authMiddleware }
