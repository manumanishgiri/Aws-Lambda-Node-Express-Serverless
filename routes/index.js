'use strict';

const testapiRoutes = require('./testapi');

module.exports = function(app)
{
    testapiRoutes(app);
};