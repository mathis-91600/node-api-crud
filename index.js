const express = require('express');
const app = express();
require('./models/dbConfig');
const bodyParser = require('body-parser');
const cors = require('cors');
const postsRoutes = require('./routes/postsController');
const carsRoutes = require('./routes/carsController');

app.use(bodyParser.json());

app.use(cors());

app.use('/posts', postsRoutes);
app.use('/cars', carsRoutes);

app.listen(5500, () => console.log('Server started: 5500'));