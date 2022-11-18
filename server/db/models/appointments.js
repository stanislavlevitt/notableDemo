const Sequelize = require('sequelize')
const db = require('../db')

const Appointments = db.define('appointments',{
  patientName:{
    type: Sequelize.STRING
  },
  time:{
    type: Sequelize.DATE
  },
  kind:{
    type: Sequelize.STRING
  },
})

module.exports = Appointments
