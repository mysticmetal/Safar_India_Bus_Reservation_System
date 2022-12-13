const mongoose = require("mongoose");

const busStopSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  distance: {
    type: Number,
    required: true,
  },
  time: {
   type:String,
   required:true,
  },
  boarding: {
    type: Boolean,
    required: true,
  },
});

const tripSchema = new mongoose.Schema({
date:{
  type:String,
  required:true,
},
  routeCode: {
    type: String,
    required: true
  },
  
  bus: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  fare_factor: {
    type: Number,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  timestamp:{
    type:String,
    required: true, 
    default: new Date().toString()
  }, 
  bus_stop: [busStopSchema],
});

// now we create collections
const trip = new mongoose.model("trip", tripSchema);

trip.createIndexes();

const newtrip = new trip({
  date:"Fri, 05 Aug 2022",
  routeCode: "AMDBRDANK-014",
  bus: "Marcopolo Luxary",
  rating: 4, 
  capacity: 40,
  fare_factor: 1.8,
  class:"luxary",
  bus_stop: [
    {
      city: "Ahmedabad",
      name: "Geeta mandir ST Bus station",
      distance: 0,
      time: { hr: 9, min: 30 },  
      boarding: true,
    },
    {
      city: "Ahmedabad",
      name: "Ranip Bus DEPo",
      distance: 0,
      time: { hr: 10, min: 30 },  
      boarding: true,
    },
    {
      city: "Baroda",
      name: "Makarpura",
      distance: 0,
      time: { hr: 9, min: 30 },
      boarding: true,
    },
    {
      city: "Surat",
      name: "Surat Central bus station",
      distance: 289,
      time: { hr: 12, min: 30 },
      boarding: false,
    },
    {
      city: "Surat",
      name: "Kamrej Bus Depo",
      distance: 300,
      time: { hr: 13, min: 0 },
      boarding: false,
    },
  ],
});


// const ssaved = newtrip.save();


module.exports = trip;