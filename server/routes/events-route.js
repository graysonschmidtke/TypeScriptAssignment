// Import express
const express = require('express')

// Import home controller
const eventsControllers = require('../controllers/events-controller.js')

// Create express router
const router = express.Router()

// Create rout between homeControllers and '/' endpoint
router.get('/', eventsControllers.eventsGetAll)

// Export router
module.exports = router