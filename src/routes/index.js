const {BASE_PATH} = require('../conf');

const init = (app) => {
    const taskRouter = require('./task.route');

    app.use(BASE_PATH, taskRouter);
}

module.exports = {
    init
}