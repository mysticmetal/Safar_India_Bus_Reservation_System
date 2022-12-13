import React from "react";

import validator from "validator";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { setNewDate, searchTrip } from "../../redux/action";

const QuickSearchForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currData = useSelector((state) => state.currSearch);
  const currDate = useSelector((state) => state.currSearch.date);

  let realDate = new Date();
  realDate.setDate(realDate.getDate() - 1);
  realDate = realDate.toISOString().substring(0, 10);

  let loadDate = (i) => {
    let d = new Date(currDate);
    d.setDate(d.getDate() + i);
    let isoDate = d.toISOString().substring(0, 10);
    let day = d.toDateString().substring(0, 3);
    let dateno = d.toDateString().substring(8, 10);
    let obj = {
      from: currData.from,
      to: currData.to,
      date: isoDate,
    };
    let flag = validator.isAfter(isoDate, realDate);

    if (!flag) {
      return (
        <section className="active-date date-disable">
          <p>{day}</p>
          <p>{dateno}</p>
        </section>
      );
    }

    if (i === 0) {
      return (
        <section className="active-date">
          <p>{day}</p>
          <p>{dateno}</p>
        </section>
      );
    } else {
      return (
        <section
          onClick={() => {
            dispatch(setNewDate(isoDate));
            dispatch(searchTrip(obj));
            navigate("/booking");
          }}
        >
          <p>{day}</p>
          <p>{dateno}</p>
        </section>
      );
    }
  };

  return (
    <>
      <div className="date-select">
        {loadDate(-1)}
        {loadDate(0)}
        {loadDate(1)}
        {loadDate(2)}
        {loadDate(3)}
      </div>
    </>
  );
};

export default QuickSearchForm;
