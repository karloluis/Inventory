var mongoose = require('mongoose');

var inventorySchema = mongoose.Schema({

  code : {type : Number},
  name : String,
  quantity : {type : Number, min : 0 },
  amount : {
    cost : {type : Number, min : 0},
    sale : {type : Number, min : 0},
    discount : {type : Number, min : 0, max : 1, default : 0}
  },

  type: String,
  description : String
});

inventorySchema.method.parse = (data) => {

}

module.exports = mongoose.model('inventories', inventorySchema);
