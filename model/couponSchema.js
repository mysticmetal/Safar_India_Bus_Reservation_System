const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema({
  couponcode: {
    type: String,
    unique: true,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  valid: {
    type: Boolean,
    required: true,
  },
  timestamp: {
    type: String,
    required: true,
    default: new Date().toString(),
  },
  max: {
    type: Number,
    required: true,
  }
});

const coupon = new mongoose.model("coupon", couponSchema);




// const ssaved = newCoupon.save();

module.exports = coupon;
