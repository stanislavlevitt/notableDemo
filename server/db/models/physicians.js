const Sequelize = require('sequelize')
const db = require('../db')

const Physicians = db.define('physicians',{
  firstName:{
    type: Sequelize.STRING
  },
  lastName:{
    type: Sequelize.STRING
  },
})

module.exports = Physicians
