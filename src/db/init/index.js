const Task = require('../models/Task');

const tasks = require('./data/tasks');

const populateDatabase = () => {
    return new Promise(async (resolve) => {
        tasks.forEach(async (t) => {
            await Task.create(t, { ignoreDuplicates: true })
        })

        resolve();
    })
};

module.exports = {
    populateDatabase
}