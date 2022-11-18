const router = require('express').Router()
const {Physicians} = require('../db/models')
module.exports = router

  // Retrieve all Physicians
  router.get("/", async (req,res, next)=>{
    try {
      const physicians = await Physicians.findAll()
      res.send(physicians)
    } catch (error) {
      next(error)
    }
  });
