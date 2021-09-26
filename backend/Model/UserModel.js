const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type:String,
    },
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
  status:{
      type:String,
  }
});

module.exports = mongoose.model("User", UserSchema);
