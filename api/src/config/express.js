const morgan = require('morgan')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

module.exports = (app) => {
  app.use(helmet())
  app.use(cookieParser())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(morgan('tiny'))
}