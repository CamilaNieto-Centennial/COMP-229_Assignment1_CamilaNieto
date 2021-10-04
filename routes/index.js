//COMP 229-005 Assignment 1
//Author: Camila Nieto
//ID: 301175110

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Home', page: 'home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', {title: 'Home', page: 'home'});
});

/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('index', {title: 'About Me', page: 'about'});
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', {title: 'Projects', page: 'projects'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', {title: 'Services', page: 'services'});
});


/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('index', {title: 'Contact', page: 'contact'});
});

module.exports = router;
