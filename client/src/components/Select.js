import React, { useRef ,useEffect,useState} from "react";
import SelectSeatValidator from "./Validation/SelectSeatValidator";

import Boarding from "./Select/Boarding";
import Droping from "./Select/Droping";
import Layout from "./Select/Layout";
import SleeperLayout from "./Select/SleeperLayout";

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import { setSelectedSeat } from "../redux/action";

const Select = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const AllTrip = useSelector((state) => state.tripData);
  const currSearch = useSelector((state) => state.currSearch);
  let { id, fare } = useParams();

  const Sobj = AllTrip.find((key) => key._id === `${id}`);

  let Bobj = Sobj.bus_stop.filter((key) => key.city === `${currSearch.from}`);
  let Dobj = Sobj.bus_stop.filter((key) => key.city === `${currSearch.to}`);


// console.log(Sobj);


  const formData = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const { bpoint, dpoint, check_seat } = formData.current;

    let aa = [];
    for (var checkbox of check_seat) {
      if (checkbox.checked) {
        aa.push(checkbox.value);
      }
    }
    const obj = {  
      id,
      fare,  //fare of one seat 
      bpoint: bpoint.value ,
      dpoint: dpoint.value,
      selec: aa,
    };

    if (SelectSeatValidator(obj)) {
      obj.bpoint+=", "+currSearch.from;
      obj.dpoint+=", "+currSearch.to;
      dispatch(setSelectedSeat(obj));
      navigate("/passenger");
    }
  };

  const [booked, setbooked] = useState([]);

  const getBookSeat = async () => {
    const res = await fetch("/api/booking/getBookSeatNo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tripId: id }),
    });
    const data = await res.json();
   setbooked(data);
  };

  useEffect(() => {
    getBookSeat();
    // eslint-disable-next-line
  }, []);





  return (
    <>
      <main className="container">
        <form ref={formData} className="seat-layout-section">
          <div className="seat-left">
            <Boarding data={Bobj} />
            <Droping data={Dobj} />
            <div className="seat-info">
              <p>
                <span className="bg-unavail"></span> Unavailable
              </p>
              <p>
                <span className="bg-avail"></span> Available
              </p>
              <p>
                <span className="bg-selec"></span> Selected
              </p>
            </div>
          </div>

          <div className="layout-sec">
            <div className="layout">
              {/* <Layout /> */}
              {Sobj.class==="seater"?<Layout book={booked} />: <SleeperLayout  book={booked}/>}

              {/* <SleeperLayout  book={booked}/> */}
            </div>

            <div className="next-sec">
              <button onClick={onSubmit}>NEXT</button>
            </div>
          </div>
        </form>
      </main>
    </>
  );
};

export default Select;
