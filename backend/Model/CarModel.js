const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
  carname: {
    type: String,
    trim: true,
  },
  carprice: {
    type: String,
    trim: true,
  },
  cartype: {
    type: String,
    trim: true,
  },
  carImg:{
      type:String,
      trim : true
  },
  status:{
    type:String
  }
});

module.exports = mongoose.model("Car", CarSchema);
