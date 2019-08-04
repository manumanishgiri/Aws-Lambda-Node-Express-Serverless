'use strict';
const express = require('express');
const app = express();
app.use(express.text());
app.use(express.json());
require('./routes')(app);
const port = 8000;
app.listen(port, () => {  console.log('We are live on ' + port);});