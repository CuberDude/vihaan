var express = require('express');
var router = express.Router();
var path = require('path');
var logdb = require('../models/login/db');
var jobdb = require('../models/jobs/db');
var voldb = require('../models/volunteer/db');


router.get('/', (req, res) => {
    res.sendFile('index.html');
});

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/login/index.html'));
});

router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/register.html'));
});

router.get('/jobs', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/jobs/job.html'));
});

router.get('/jobs-add', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/jobs-add/job-form.html'));
});

router.get('/volunteer', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/volunteer/vol.html'));
});

router.get('/volunteer-add', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/volunteer-add/vol-form.html'));
});

router.post('/jobs/add', (req, res) => {
    var obj = req.body;
    console.log('hey:', obj);
    jobdb.Create(obj, res);
});
router.get('/jobs/read', (req, res) => {
    var obj = req.query;
    console.log(obj);
    jobdb.ReadAll(res);
});


router.post('/volunteer/add', (req, res) => {
    var obj = req.body;
    console.log(obj);
    voldb.Create(obj, res);
});
router.get('/volunteer/read', (req, res) => {
    var obj = req.body;
    console.log(obj);
    voldb.ReadAll(res);
});

module.exports = router;
