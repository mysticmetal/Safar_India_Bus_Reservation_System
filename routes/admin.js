var express = require("express");
var router = express.Router();

const coupon = require("../model/couponSchema");
const trip = require("../model/tripSchema");

router.get("/", (req, res) => {
  res.send("Hello from Admin Panel");
});

// adding the Coupon Code : POST

router.post("/addCoupon", async (req, res) => {
  try {
    const { couponcode, discount, valid,max } = req.body;

    const newCoupon = new coupon({
      couponcode,
      discount,
      valid,
      max
    });
    const dd = await newCoupon.save();
    if (dd) {
      res.status(202).send("coupon added sucessfully");
    }
  } catch (err) {
    console.log(err);
    res.status(404).send("Coupon Not Added");
  }
});

// adding the trip : POST
router.post("/addTrip", async (req, res) => {
  try {
    const newTrip = new trip(req.body);
    const dd = await newTrip.save();

    if (dd) {
      res.status(202).send("trip added sucessfully");
    }
  } catch (err) {
    console.log(err);
    res.status(400).send("Trip Not Added");
  }
});




module.exports = router;
