import React from "react";

import TripSearchValidator from "../Validation/TripSearchValidator";

import { searchTrip, currSearch } from "../../redux/action";

import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

const TripSearchForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currSearchRes = useSelector((state) => state.currSearch);

  // updating the input field value forcefully
  const load = () => {
    document.querySelector("#date").value = currSearchRes.date;
    document.querySelector("#from").value = currSearchRes.from;
    document.querySelector("#to").value = currSearchRes.to;
  };

  const sendTripFormData = () => {
    let obj = {
      from: document.querySelector("#from").value,
      to: document.querySelector("#to").value,
      date: document.querySelector("#date").value,
    };

    if (TripSearchValidator(obj)) {
      dispatch(currSearch(obj));
      dispatch(searchTrip(obj));
      navigate("/booking");
    }
  };

  load();

  return (
    <>
      <div className="bus-search-form container">
        <section>
          <label>From</label>
          <input
            name="fromCity"
            id="from"
            type="text"
            defaultValue={currSearchRes.from}
          />
        </section>
        <i className="fa-solid fa-arrow-right-arrow-left arr-ico" />
        <section>
          <label>To</label>
          <input
            name="toCity"
            id="to"
            type="text"
            defaultValue={currSearchRes.to}
          />
        </section>
        <section>
          <label>Journey Date</label>
          <input
            name="date"
            id="date"
            type="date"
            min={currSearchRes.date}
            defaultValue={currSearchRes.date}
          />
        </section>

        <section>
          <button onClick={sendTripFormData}>Search</button>
        </section>
      </div>
    </>
  );
};

export default TripSearchForm;
