const router = require('express').Router()
module.exports = router

router.use('/', require('./hello'))
router.use('/physicians', require('./physicians'))
router.use('/appointments', require('./appointments'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
