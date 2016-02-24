var express = require('express');
var router = express.Router();
var debug = require('debug')('Inventory:')

/* GET home page. */
router.route('/')
.get( (req, res, next) => {
  models.Inventory.find( {}, (err, inventoryData) => {
    res.render('inventory', { title: 'Inventory', active: false, inventory : inventoryData });
  })
})
.post( (req, res, next) => {
  query = req.query; // Change so that it parses enties.
  update = req.query; // Change so that it parses enties.

  trans = new models.Transaction({})

})

router.route('/new/item')
.get( (req, res, next) => {
  res.render('itemNew', {title : "New Item"})
})
.post( (req, res, next) => {
  query = {
    code : req.body.code,
    name : req.body.name,
    quantity : parseInt(req.body.quantity),
    amount : {
      cost : parseInt(req.body.cost),
      sale : parseInt(req.body.sale)
    },
    type: req.body.type,
    description : req.body.description
  }
  debug(query)

  item = new models.Inventory(query)
  .save( (err, data, numAffected) => {
    debug(err, data, numAffected)
  })

  res.redirect('/')

})

module.exports = router;
