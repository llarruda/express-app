'use strict';

module.exports.controller = (app) => {
    // get homepage
    app.get('/', (req, res) => {
        res.render('index', { title: 'Express'});
    });

    app.get('/clients', (req, res) => {
        res.render('index', { title: 'Clients'});
    });
}