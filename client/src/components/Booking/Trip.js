import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTimeModal, modalStatus } from "../../redux/action";

import { useNavigate } from "react-router-dom";



//=> get trip duration String
const getDuration =(d1,d2)=>{
  var date1 = new Date(`01/01/1998 ${d1}`);
var date2 = new Date(`01/01/1998 ${d2}`);

var diff = date2.getTime() - date1.getTime();

var msec = diff;
var hh = Math.floor(msec / 1000 / 60 / 60);
msec -= hh * 1000 * 60 * 60;
var mm = Math.floor(msec / 1000 / 60);
msec -= mm * 1000 * 60;

return `${hh}h ${mm}m`;

}



const Trip = (prop) => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  let { Tobj, from, to } = prop;

  const Sobj = Tobj.bus_stop.find((key) => key.city === `${from}`);
  const Eobj = Tobj.bus_stop.find((key) => key.city === `${to}`);

  const Stime = Sobj.time;
  const Etime = Eobj.time;

  //=> function that will calculate fare according to class
  const getfare = () => {
    return parseInt((Eobj.distance - Sobj.distance) * Tobj.fare_factor);
  };

  const [seat, setseat] = useState(0);

  const getBookSeat = async () => {
    const res = await fetch("/api/booking/getBookSeat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tripId: Tobj._id }),
    });
    const data = await res.json();
    setseat(parseInt(data));
  };

  useEffect(() => {
    getBookSeat();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <section className="start_time">
        {Stime}
      </section>
      <section className="duration">
        <span>{getDuration(Stime,Etime)}</span>
      </section>
      <section className="end_time">
        {Etime}
      </section>
      <section className="coupon"><i className="fa-solid fa-star"></i>  {Tobj.rating}</section>
      <section className="real_cost">₹{getfare()}</section>
      <section className="prime_cost">₹{parseInt(getfare() * 1.1)}</section>
      <section className="bus_name">{Tobj.bus}</section>
      <section className="seat_left">{Tobj.capacity - seat} Seats Left</section>
      <hr />
      <section className="facility">
        <i className="fa-solid fa-wifi" />
        <i className="fa-solid fa-bottle-water" />
        <i className="fa-solid fa-pump-medical" />
        <i className="fa-solid fa-briefcase-medical" />
        <i className="fa-solid fa-charging-station" />
        <i className="fa-solid fa-spray-can" />
        <i className="fa-solid fa-location-dot" />
      </section>
      <span
        onClick={() => {
          dispatch(setTimeModal(Tobj.bus_stop));
          dispatch(modalStatus(true));
          nav("/booking");
        }}
        className="timeline"
      >
        View Timeline
      </span>
      <button
        onClick={() => {
          nav(`/${Tobj._id}/${getfare()}`);
        }}
        className="selec_seat"
      >
        Select Seat
      </button>
    </>
  );
};

export default Trip;
