const express = require('express')
const taskControllers = require('./controllers/taskControllers')
const tasksMiddlewares = require('./middlewares/tasksMiddlewares')

const router = express.Router()

router.get('/tasks', taskControllers.getAll)

router.post('/tasks', tasksMiddlewares.validateTitle, taskControllers.createTask)

router.delete('/tasks/:id', taskControllers.deleteTask)

router.put('/tasks/:id', tasksMiddlewares.validateStatus, taskControllers.updatedTask)

module.exports = router