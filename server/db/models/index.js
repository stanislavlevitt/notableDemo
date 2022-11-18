const Appointments = require('./appointments')
const Physician = require('./physicians')

Physician.hasMany(Appointments)
Appointments.belongsTo(Physician)


module.exports = {
  Appointments,
  Physician
}
