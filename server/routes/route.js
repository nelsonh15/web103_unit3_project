import express from 'express'
// import controllers for events and locations
import { getEvents, getEventsById } from '../controllers/events.js'
import { getLocations, getLocationById } from '../controllers/locations.js'

const router = express.Router()

// define routes to get events and locations
router.get('/events', getEvents)
router.get('/events/:id', getEventsById)
router.get('/locations', getLocations)
router.get('/locations/:id', getLocationById)


export default router