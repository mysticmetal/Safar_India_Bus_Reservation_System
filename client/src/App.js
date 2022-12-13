import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


// ---------------- Application Css Files --------------------

import "./css/homepage.css";
import "./css/bookingpage.css";
import "./css/getticket.css";
import "./css/seatselectpage.css";
import "./css/modalpopup.css";
import "./css/passenger.css";
import "./css/payment.css";
import "./css/alertmsg.css";
import "./css/slider.css";
import "./css/common.css";



/*
import "./homepage.css";
import "./ticket.css";
import "./modal_popup.css";
import "./layout.css";
import "./passenger.css";
import "./payment.css";
import "./alert_msg.css";
import "./printticket.css";
*/
//--------------------------------------------------------------



//------------------ All Components ---------------------

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Booking from "./components/Booking";
import Select from "./components/Select";
import Passenger from "./components/Passenger";
import Payment from "./components/Payment";
import Success from "./components/Success";
import GetTicket from "./components/GetTicket";
import TicketPrint from "./components/TicketPrint";
import Error from "./components/Error";
import ComingSoon from "./components/ComingSoon";

//--------------------------------------------------------------

const App = () => {
  return (
    
      <BrowserRouter>
        <div className="wrapper">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />

            <Route path="/:id/:fare" element={<Select />} />
            <Route path="/passenger" element={<Passenger />} />
            <Route path="/pay/:amt/:id" element={<Payment />} />
            <Route path="/success" element={<Success />} />
            <Route path="/getticket" element={<GetTicket />} />
            <Route path="/ticket/:id" element={<TicketPrint />} />
            <Route path="/reschedule" element={<ComingSoon />} />
            <Route path="/cancel" element={<ComingSoon />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
   
  );
};

export default App;
