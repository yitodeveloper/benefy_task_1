const Database = require('..');
const Sequelize = require('sequelize');

const db = new Database();

class Task extends Sequelize.Model{}
Task.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        field: 'task_id'
    },
    createdAt: {
        type: 'TIMESTAMP',
        field: 'created_at'
    },
    text: {
        type: Sequelize.STRING,
        allowNull: false
    },
    complete: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, { sequelize: db.connection, modelName: 'task', freezeTableName: true, timestamps: false })

module.exports = Task;