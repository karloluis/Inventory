var mongoose = require('mongoose');

var transactionSchema = mongoose.Schema({

  items : [],
  action : {
    type : String,
    validate : {
      validator : (str) => {
        return (["register", "restock", "sale", "refund", "purchased"].indexOf(str) != -1)
      },
      message : "{VALUE} is not a valid action!"
    }
  },
  date : {type : Date, default : Date.now}
});


module.exports = mongoose.model('transactions', transactionSchema);
