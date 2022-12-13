var express = require("express");
var router = express.Router();

var trips = require("../model/tripSchema");
var coupon = require("../model/couponSchema");
var admindata = require("../model/adminData");
var passenger = require("../model/passengerSchema");

router.get("/", (req, res) => {
  res.send("this is Booking Route");
});

// get available trips : POST

router.post("/getAvailableTrips", async (req, res) => {
  try {
    let { fromCity, toCity, date } = req.body;

    let result = await trips.find({
      $and: [
        { date: date },
        { "bus_stop.city": fromCity },
        { "bus_stop.city": toCity },
      ],
    });

    result = result.filter((ele, ind, arr) => {
      let sind = ele.bus_stop.findIndex(
        (ele) => ele.city === fromCity && ele.boarding === true
      );
      let dind = ele.bus_stop.findIndex(
        (ele) => ele.city === toCity && ele.boarding === false
      );
      return sind < dind;
    });

    if (result.length > 0) {
      return res.status(200).send(result);
    } else {
      return res.status(404).send("trip not found");
    }
  } catch (err) {
    // console.log(err);
    return res.status(404).send("trip not found");
  }
});



//== check wheather coupon is valid or not : POST

router.post("/checkCoupon", async (req, res) => {
  try {
    const { couponCode } = req.body;

    const result = await coupon.findOne(
      {
        $and: [{ couponcode: couponCode }, { valid: true }],
      },
      { max: 1, discount: 1, _id: 0 }
    );
    if (result) {
      res.status(202).send(result);
    } else {
      res.status(404).send("coupon not match");
    }
  } catch (err) {
    console.log(err);
    res.status(404).send({ error: "coupon not match" });
  }
});

//get list of all city :GET
router.post("/getcity", async (req, res) => {
  try {
    const result = await admindata.find({ dataName: "cityList" });
    if (result.length > 0) {
      res.status(200).send(result);
    } else {
      res.status(404).send("citylist not found");
    }
  } catch (err) {
    console.log(err);
    res.status(404).send("city list error");
  }
});

// store the Passenger Data in Database : POST

router.post("/addPassenger", async (req, res) => {
  try {
    const result = await passenger.create(req.body);
    if (result) {
      return res.status(202).send(result._id);
    }
  } catch (err) {
    console.log(err);
    return res.status(404).send(err.errors);
  }
});

//changing the  status of passenger when payment is success

router.post("/PaySuccess", async (req, res) => {
  try {
    const result = await passenger.updateOne(
      { _id: req.body.id },
      {
        $set: { paymentStatus: true, paymentID: req.body.payid },
      }
    );

    if (result) {
      return res.status(202).send(result);
    }
  } catch (err) {
    return res.status(404).send(err.errors);
  }
});

// Sending the booked seat for particulat trip : POST
router.post("/getBookSeat", async (req, res) => {
  try {
    const result = await passenger.find(
      { tripId: req.body.tripId },
      {
        peoples: 1,
        _id: 0,
      }
    );

    let newarr = [];

    result.forEach((ele) => {
      newarr.push(...ele.peoples);
    });

    if (result) {
      return res.status(200).send(`${newarr.length}`);
    }
  } catch (err) {
    res.status(200).send(`${0}`);
  }
});

// Sending the booked seat no for particulat trip : POST
router.post("/getBookSeatNo", async (req, res) => {
  try {
    const result = await passenger.find(
      { tripId: req.body.tripId },
      {
        peoples: 1,
        _id: 0,
      }
    );

    let newarr = [];

    result.forEach((ele) => {
      newarr.push(...ele.peoples);
    });

    newarr.forEach((ele, ind, arr) => {
      arr[ind] = ele[0];
    });

    if (result) {
      return res.status(200).send(newarr);
    }
  } catch (err) {
    res.status(200).send(newarr);
  }
});

// get ticket : POST

router.post("/getTicket", async (req, res) => {
  try {
    const result = await passenger.find({
      $and: [
        { email: req.body.email },
        { phoneno: req.body.phoneno },
        { tripStatus: false },
        { paymentStatus: true },
      ],
    });
    if (result) {
      return res.status(202).send(result);
    }
  } catch (err) {
    return res.status(404).send([]);
  }
});

module.exports = router;
