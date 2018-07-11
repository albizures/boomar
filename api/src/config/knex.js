
const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  client: 'mysql',
  debug,
  connection: {
    host: process.env.DB_HOST || 'db',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: 'boomar'
  },
  pool: {
    min: 2,
    max: 10
  }
}