import React from "react";

//importing page components
import AvailableTrip from "./Booking/AvailableTrip";
import QuickSearchForm from "./Booking/QuickSearchForm";
import TripSearchForm from "./Booking/TripSearchForm";
import TimelineModal from "./Booking/TimelineModal";


// import { useSelector } from "react-redux";



const Booking = () => {


  return (
    <>
     <TimelineModal/>
      <TripSearchForm />
      <main className=" ticket-page">
        <div className="container  ticket-data">
          <QuickSearchForm />
          <AvailableTrip/>
        </div>
      </main>
    </>
  );
};

export default Booking;
