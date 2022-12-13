const mongoose = require("mongoose");

const passengerSchema = new mongoose.Schema({
  tripId: {
    type: String,
    required: true,
  },
  tripStatus: {
    type: Boolean,
    required: true,
  },
  paymentStatus: {
    type: Boolean,
    required: true,
  },
  paymentID: {
    type: String,
    required: true,
  },
  journeyDate: {
    type: String,
    required: true,
  },
  departure: {
    type: String,
    required: true,
  },
  end: {
    type: String,
    required: true,
  },
  coupon: {
    type: String,
    required: true,
  },
  fare: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneno: {
    type: Number,
    required: true,
    min: 1000000000,
    max: 9999999999,
  },
  peoples: {
    type: Array,
    required: true,
  },
  timestamp: {
    type: String,
    required: true,
    default: new Date().toString(),
  },
});

// now we create collections
const passenger = new mongoose.model("passenger", passengerSchema);

const newpass = new passenger({
  tripId: "99fsdnjndsdssd",
  tripStatus: false,
  paymentStatus: false,
  paymentID: "none",
  journeyDate: "2020-08-07",
  departure: "8:00 | gita mandir depo",
  end: "12:00 | surat bus depo ",
  coupon: "SAFAR100",
  fare: 2300,
  email: "abc@email.com",
  phoneno: 9012312322,
  peoples: [
    ["1", "sharma verma", "male"],
    ["2", "dharma karma", "female"],
  ],
});

// const ssaved = newpass.save();

module.exports = passenger;
