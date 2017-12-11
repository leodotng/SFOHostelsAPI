var express = require('express');
var router = express.Router();
var queries = require('./queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api', function(req, res, next) {
  queries.getHostels()
  .then((hostelData) => {
    res.json(hostelData)
  })
});

module.exports = router;
