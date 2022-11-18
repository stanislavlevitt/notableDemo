'use strict'

const db = require('../server/db')
const {Appointments, Physician} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  const Physician1 = await Physician.create({
    firstName: 'Julius',
    lastName: 'Hibbert',
  })
  const Physician2 = await Physician.create({
    firstName: 'Algemop',
    lastName: 'Krieger',
  })
  const Physician3 = await Physician.create({
    firstName: 'Nick',
    lastName: 'Riviera',
  })


  await Appointments.create({
    patientName: 'Sterling Archer',
    time: '8:00AM',
    kind: 'New Patient',
    physicianId: Physician2.id
  })

  await Appointments.create({
    patientName: 'Cyril Figis',
    time: '8:30AM',
    kind: 'Follow-up',
    physicianId: Physician1.id
  })

  await Appointments.create({
    patientName: 'Ray Gilette',
    time: '9:00AM',
    kind: 'Follow-up',
    physicianId: Physician3.id
  })

  await Appointments.create({
    patientName: 'Lana Kana',
    time: '9:30AM',
    kind: 'New Patient',
    physicianId: Physician2.id
  })

  await Appointments.create({
    patientName: 'Pam Poovey',
    time: '10:00AM',
    kind: 'New Patient',
    physicianId: Physician2.id
  })


}

async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

if (module === require.main) {
  runSeed()
}

module.exports = seed
