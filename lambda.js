'use strict';
const awsServerlessExpress = require('aws-serverless-express');
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const app = express();
app.use(express.text());
app.use(express.json());
app.use(compression());
app.use(cors());
app.use(awsServerlessExpressMiddleware.eventContext());
require('./routes')(app);
// const server = awsServerlessExpress.createServer(app);
const binaryMimeTypes = [
    'application/json'
  ];
  const server = awsServerlessExpress.createServer(app);
exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context);