var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Spot' });
});

router.get('/new', (req, res, next) => {

})

router.use('/store', require('./store'))

router.use('/inventory', require('./inventory'))

module.exports = router;
