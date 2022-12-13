import React, { useEffect } from "react";
import Trip from "./Trip";
import Nothing from "./Nothing";

import { useSelector, useDispatch } from "react-redux";
import { loadTrip } from "../../redux/action";

const AvailableTrip = () => {
  const dispatch = useDispatch();
  const currTrip = useSelector((state) => state.tripData);
  const currSearch=useSelector((state) => state.currSearch);

  useEffect(() => {
    dispatch(loadTrip());
    // eslint-disable-next-line
  }, []);

// console.log(currTrip);

  return (
    <>
      <div className="ticket-wrapper">
        {currTrip.map((item) => (
          <div className="ticket-container" key={item._id}>
            <Trip Tobj={item} from={currSearch.from} to={currSearch.to} />
          </div>
        ))}
        {currTrip.length <=0 ? <Nothing/> : ""}
      </div>
    </>
  );
};

export default AvailableTrip;
