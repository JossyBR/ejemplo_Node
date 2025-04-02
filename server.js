require("dotenv").config();
const express = require('express')
const app = express();

const routes = require('./api.routes')
app.use('/api/v1', routes);

app.get('/', (req, res) => {
    res.send('¡Hola JB!')
})

app.listen(process.env.PORT, () => {
    console.log(process.env.BIENVENIDA, process.env.PORT);
})