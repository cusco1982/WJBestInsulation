// A GET Route to /survey which should display the survey page.


// A default, catch-all route that leads to home.html which displays the home page.

var path = require('path');

module.exports = function(app) {

    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    app.get('/services', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/services.html'));
    });

    app.get('/licensing', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/licensing.html'));
    });

    app.get('/projects', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/projects.html'));
    });

    app.get('/company', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/company.html'));
    });

    app.get('/contact', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/contact.html'));
    });
};