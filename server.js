const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


require('dotenv').config();


const app = express();
app.use(express.json());

mongoose.connect(`${process.env.MONGO_SERV}` , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
requireDir('./src/models');

const Product = mongoose.model('Product');

app.use('/api', require('./src/routes'));

app.listen(process.env.PORT || 3001);

