import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


import { searchTrip } from "../../redux/action";
import { currSearch } from "../../redux/action";

import { useDispatch } from "react-redux";

import TripSearchValidator from "../Validation/TripSearchValidator";

const HeroSecForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  var currDate = new Date().toISOString().substring(0, 10);
 

  const sendTripFormData = () => {
    let obj = {
      from: document.querySelector("#from").value,
      to: document.querySelector("#to").value,
      date: document.querySelector("#date").value,
    };

  if(TripSearchValidator(obj)){
    dispatch(currSearch(obj));
    dispatch(searchTrip(obj));
    navigate("/booking");
  }


  };

  const [citylist, setcitylist] = useState([]);

  const getCity = async () => {
    try {
      const resBack = await fetch("/api/booking/getcity", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name:"citylist data"}),
      });

      const data = await resBack.json();
      setcitylist(data[0].list);
    } catch (err) {
      console.log(err);
    }
  };

  // getCity();

  useEffect(() => {
    getCity();
  }, []);

  return (
    <>
      <div className="hero-section ">
        <div className="hero-poster">
          <img src="img/hero-poster.png" alt="hero-poster" />
        </div>
        <div className="hero-form">
          <div>
            <section className="border-right">
              <label>
                <i className="fa-solid fa-location-dot" />
                From City
              </label>
              <input
                type="text"
                id="from"
                list="citylist"
                // defaultValue="Ahmedabad"
                name="fromCity"
                placeholder="From City"
              />

              <datalist id="citylist">
                {citylist.map((ele) => (
                  <option value={ele} key={ele} />
                ))}

                {/* <option value="Internet Explorer" />
                <option value="Opera" />
                <option value="Safari" />
                <option value="Microsoft Edge" /> */}
              </datalist>
            </section>
            <i className="fa-solid fa-arrow-right-arrow-left" />
            <section className="border-right">
              <label>
                <i className="fa-solid fa-location-dot" />
                To City
              </label>
              <input
                type="text"
                id="to"
                // defaultValue="Surat"
                list="citylist"
                name="toCity"
                placeholder="To City"
              />
            </section>
            <section>
              <label>
                <i className="fa-solid fa-calendar-days" />
                Date
              </label>
              <input
                id="date"
                name="date"
                min={currDate}
                defaultValue={currDate}
                autoComplete="off"
                type="date"
              />
            </section>
            <section>
              <button className="btn-pink" onClick={sendTripFormData}>
                Search
              </button>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSecForm;
