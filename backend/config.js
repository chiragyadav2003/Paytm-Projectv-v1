require('dotenv').config()

const jwtSecret = process.env.JWT_SECRET_TOKEN

// console.log(jwtSecret)

module.exports = jwtSecret