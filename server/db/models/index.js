const Appointments = require('./appointments')
const Physicians = require('./physicians')

Physicians.hasMany(Appointments)
Appointments.belongsTo(Physicians)


module.exports = {
  Appointments,
  Physicians
}
