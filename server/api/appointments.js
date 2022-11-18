const router = require('express').Router()
const {Appointments} = require('../db/models')
module.exports = router


// Retrieve all appoints for specific physician
    router.get("/:id", async (req,res, next)=>{
      const id = req.params.id
      try {
        const appointments = await Appointments.findAll({where:{physicianId:id}})
        res.send(appointments)
      } catch (error) {
        next(error)
      }
    });
