const express = require('express')
const router = express.Router()

const taskController = require('../controllers/task')

router.get('/task', taskController.getAllTasks);

module.exports = router;