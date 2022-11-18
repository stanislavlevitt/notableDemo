const Appointments = require('./appointments')
const Physician = require('./physician')

Physician.hasMany(Appointments)
Appointments.belongsTo(Physician)


module.exports = {
  Appointments,
  Physician
}
