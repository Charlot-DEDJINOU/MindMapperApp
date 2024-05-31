const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.ATLAS_URI;
const dbName = process.env.DATABASE;

mongoose.connect(uri, { dbName: dbName })
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Error connecting to MongoDB:', err));

module.exports = mongoose;