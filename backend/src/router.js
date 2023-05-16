const express = require('express')
const taskControllers = require('./controllers/taskControllers')
const tasksMiddlewares = require('./middlewares/tasksMiddlewares')

const router = express.Router()

router.get('/tasks', taskControllers.getAll)

router.post('/tasks', tasksMiddlewares.validateBody, taskControllers.createTask)

module.exports = router