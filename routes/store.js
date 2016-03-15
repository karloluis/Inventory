var express = require('express');
var router = express.Router();
var debug = require('debug')('Inventory:')

router.route('/')
.get( (req, res, next) => {
  res.render('store', {title: "Store" })
})

module.exports = router
