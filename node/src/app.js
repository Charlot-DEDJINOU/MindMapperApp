const express = require('express');
const app = express();
const cors = require('cors'); // Importez le package CORS

const apiRoutes = require('./routes/api');
const routemap = require('express-routemap');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors({
    origin: '*',
    credentials: false
}));

app.use('/api', apiRoutes);

routemap(app);

module.exports = app;