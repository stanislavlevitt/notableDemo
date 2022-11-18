const Sequelize = require('sequelize')

const db = new Sequelize(
  process.env.DATABASE_URL || `postgresql://postgres:FV1xbrosO4cKRAbCRpMl@containers-us-west-117.railway.app:7974/railway`,
  {
    logging: false
  }
)

module.exports = db

if (process.env.NODE_ENV === 'test') {
  after('close database connection', () => db.close())
}
