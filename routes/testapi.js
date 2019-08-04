'use strict';
module.exports = function(app) {
    app.post('/testapi', (req, res) => 
    {
        var messageData = {'post':'Giri'};
        res.send(messageData);
    });

    app.get('/testapi', (req, res) => 
    {
        var messageData = {'get':'Giri'};
        res.send(messageData);
    });
};