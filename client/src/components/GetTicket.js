import React from "react";

import { setPrintTicket } from "../redux/action";

import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

const GetTicket = () => {
  const dispatch = useDispatch();

  const tripData = useSelector((state) => state.printTicket);

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      email: document.querySelector("#email").value,
      phoneno: parseInt(document.querySelector("#phone").value),
    };

    dispatch(setPrintTicket(obj));
  };

  return (
    <>
      <main className="container">
        <center>
          <h1>View / Print Ticket</h1>
        </center>
        <div className="get-search">
          <input type="email" id="email" placeholder="Enter Email" />
          <input type="number" id="phone" placeholder="Enter Phone No" />
          <button onClick={handleSubmit}>Search</button>
        </div>
        <table>
          <tbody>
            {tripData.length === 0 ? (
              <center>No Booking Available</center>
            ) : (
              tripData.map((item) => (
                <tr key={item._id}>
                  <td>{item.journeyDate}</td>
                  <td>
                    {item.departure.slice(item.departure.lastIndexOf(",") + 1)}{" "}
                    to {item.end.slice(item.end.lastIndexOf(",") + 1)}
                  </td>
                  <td>
                    <Link to={`/ticket/${item._id}`}>VIEW TICKET</Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </main>
    </>
  );
};

export default GetTicket;
