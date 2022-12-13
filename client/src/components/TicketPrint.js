import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";


const TicketPrint = () => {
  const navigate = useNavigate();
  let { id } = useParams();

  const tripdata = useSelector((state) => state.printTicket);

  const item = tripdata.find((ele) => {
    return ele._id === id;
  });



  if (!item) {
    navigate("/hjhjh");
    
  }else{


  const handleClick = () => {
    window.print();
  };

  return (
    <>
      <main className="container">
        <div className="ticket_container" id="ticket">
          <table>
            <tbody>
              <tr className="ticket-header">
                <th colSpan={3}>
                  <img src="/img/logo.png" alt="Safar" />{" "}
                </th>
              </tr>
              <tr>
                <td>Date</td>
                <td colSpan={2}>{item.journeyDate}</td>
              </tr>
              <tr>
                <td>Trip ID</td>
                <td colSpan={2}>{item.tripId}</td>
              </tr>
              <tr>
                <td>Boarding</td>
                <td colSpan={2}>{item.departure}</td>
              </tr>
              <tr>
                <td>Drop</td>
                <td colSpan={2}>{item.end}</td>
              </tr>
              <tr>
                <th colSpan={3}> Booking Details </th>
              </tr>
              <tr>
                <td>Customer ID</td>
                <td colSpan={2}>{item._id}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td colSpan={2}>{item.email}</td>
              </tr>
              <tr>
                <td>Phone No</td>
                <td colSpan={2}>{item.phoneno}</td>
              </tr>
              <tr>
                <th colSpan={3}> Passenger Details </th>
              </tr>
              {item.peoples.map((ele) => (
                <tr key={ele[0]}>
                  <td>{ele[0]}</td>
                  <td>{ele[1]}</td>
                  <td>{ele[2]}</td>
                </tr>
              ))}

              <tr>
                <th colSpan={2}> Fare </th>
                <th> ₹ {item.fare} </th>
              </tr>
            </tbody>
          </table>
          <ol>
            <li>
              The seat(s) booked under this e-ticket is/are not transferable.
            </li>
            <li>
              This e-ticket print out has to be carried by the passenger during
              the journey along with Original Photo ID Card of the passenger
              whose name appears above.
            </li>
            <li>
              Please keep the e-ticket safely till the end of the journey.
            </li>
            <li>Please show the e-ticket at the time of checking.</li>
            <li>
              Safar India reserves the rights to change/cancel the class of
              service.
            </li>
            <li>
              Passengers will have to pay the difference amount at boarding time
              in case of fare / levies / taxes revision as and when applicable.
              The difference amount will be calculated on charged fare and new
              fare / new levy / revised tax.
            </li>
            <li>The Ticket Can Reschedule Only Once.</li>
            <li>Ticket Can be Cancel Before 24 Hr of Journey Start.</li>
          </ol>
          <p className="print_msg">Printed On : {new Date().toString()} </p>
        </div>
        <div className="print-btn">
          <button onClick={handleClick}>Print Ticket</button>
        </div>
        <Link to="/" className="home-btn">
          &#x2190; BACK TO HOMEPAGE
        </Link>
      </main>
    </>
  );
      
}
};

export default TicketPrint;
