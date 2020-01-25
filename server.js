const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const items = require('./routes/api/items');
const contacts = require('./routes/api/forms');
const artists = require('./routes/api/artistsforms');
const app = express();

app.use(bodyParser.json());

//DB Config

const db = require('./config/keys').mongoURI;

//COnnect to Mongo

mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.use('/api/items', items);

app.use('/api/forms', contacts);

app.use('/api/artistforms', artists);

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server started on port ${port}`));