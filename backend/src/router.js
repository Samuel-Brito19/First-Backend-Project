const express = require('express')
const taskControllers = require('./controllers/taskControllers')

const router = express.Router()

router.get('/tasks', taskControllers.getAll)

module.exports = router