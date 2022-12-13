const mongoose = require("mongoose");

const adminDataSchema = new mongoose.Schema({
 dataName:{
    type:String,
    required:true
 }
});

const adminData = new mongoose.model("adminData", adminDataSchema);

module.exports = adminData;