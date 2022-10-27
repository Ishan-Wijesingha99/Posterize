const jwt = require('jsonwebtoken')



const authToken = (req, res, next) => {
  const authHeader = req.headers.token

  if(!authHeader) return res.status(401).json({ error: "JWT not authenticated" })

  jwt.verify()
}
