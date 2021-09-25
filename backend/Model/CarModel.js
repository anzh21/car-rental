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
  }
});

module.exports = mongoose.model("Car", CarSchema);
