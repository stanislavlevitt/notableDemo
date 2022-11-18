const router = require('express').Router()
const {Physicians} = require('../db/models')
const Sequelize = require('sequelize')
module.exports = router

  // Retrieve all Tutorials
  router.get("/", async (req,res, next)=>{
    try {
      const physicians = await Physicians.findAll()
      res.send(physicians)
    } catch (error) {
      next(error)
    }
  });
