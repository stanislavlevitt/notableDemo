const Sequelize = require('sequelize')
const db = require('../db')

const Physician = db.define('physicians',{
  firstName:{
    type: Sequelize.STRING
  },
  lastName:{
    type: Sequelize.STRING
  },
})

module.exports = Physician
