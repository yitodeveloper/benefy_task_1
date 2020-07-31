const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { populateDatabase } = require('./src/db/init')

const routes = require('./src/routes');


app.use(bodyParser.urlencoded({ extended: true, limit: '500mb' }));
app.use(bodyParser.json({ limit: '500mb' }));


routes.init(app);

// Carga con información inicial la base de datos y luego corre el servicio
populateDatabase().then(() => {
    app.listen(80, () => {
        console.log('Todo list running')
    })
})
