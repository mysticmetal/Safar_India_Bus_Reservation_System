import React, { useRef } from "react";

import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import PassengerValidation from "./Validation/PassengerValidation";

import PassDetail from "./Passenger/PassDetail";
import TripSummary from "./Passenger/TripSummary";
import FareDetail from "./Passenger/FareDetail";

const Passenger = () => {
  const navigate = useNavigate();

  const Data = useSelector((state) => state);

  const formData = useRef();

  const onSubmit = async (e) => {
    e.preventDefault();

    // console.log("clicked on submit button ");
    const { couponB, netfare, pag_email, pag_mobile, gen, pag_name } =
      formData.current;

    let people = [];
    const seat_arr = Data.selecSeat.selec;

    if (seat_arr.length < 2) {
      seat_arr.forEach((ele, ind) =>
        people.push([ele, pag_name.value, gen.value])
      );
    } else {
      let gen_arr = [];
      gen.forEach((ele) => gen_arr.push(ele.value));
      // console.log(gen_arr);
      let pag_name_arr = [];
      pag_name.forEach((ele) => pag_name_arr.push(ele.value));
      // console.log(pag_name_arr);

      seat_arr.forEach((ele, ind) =>
        people.push([ele, pag_name_arr[ind], gen_arr[ind]])
      );
    }

    // console.log(people);

    let obj = {
      tripId: Data.selecSeat.id,
      tripStatus: false,
      paymentStatus: false,
      paymentID:"none",
      journeyDate: Data.currSearch.date,
      departure: Data.selecSeat.bpoint,
      end: Data.selecSeat.dpoint,
      coupon: couponB.value,
      fare: parseInt(netfare.value),
      email: pag_email.value,
      phoneno: parseInt(pag_mobile.value),
      peoples: people,
    };
    // console.log(obj);

    if (!PassengerValidation(obj)) {
      return;
    }

    try {
      const res = await fetch("/api/booking/addPassenger", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });
      const data = await res.json();

      if (res.status === 202 || !data) {
        // console.log("passsenger added sucessfully");
        // console.log(data);
        navigate(`/pay/${obj.fare}/${data}`);
      }
    } catch (err) {
      console.log("error");
      console.log(err);
    }
  };

  return (
    <>
      <main className="container">
        <form ref={formData} className="passenger-detail-section">
          <TripSummary data={Data.currSearch} time={Data.selecSeat.bpoint} />
          <h2>Passenger Details</h2>
          <PassDetail data={Data.selecSeat.selec} />
          <h2>Contact Details</h2>
          <section className="contact-detail">
            <div className="psg-sec">
              <span>Email ID</span>
              <div className="psg-sec-det">
                <input
                  type="email"
                  name="pag_email"
                  placeholder="Enter Email ID"
                />
              </div>
            </div>
            <div className="psg-sec">
              <span>Contact Number </span>
              <div className="psg-sec-det">
                <input
                  type="tel"
                  name="pag_mobile"
                  placeholder="Enter Mobile Number"
                />
              </div>
            </div>
          </section>

          <FareDetail
            sub={onSubmit}
            fare={Data.selecSeat.fare}
            seatCount={Data.selecSeat.selec.length}
          />
        </form>
      </main>
    </>
  );
};

export default Passenger;
