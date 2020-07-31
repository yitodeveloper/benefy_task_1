// Importando Modelo
const Task = require('../db/models/Task')

const getAllTasks =  async (req, res) => {
    
    const tasks = await Task.findAll();

    res.status(200).send({
        code: 'SUCCESS',
        message: 'tareas encontradas',
        payload: {
            tasks,
        }
    })
}

module.exports = {
    getAllTasks,
}