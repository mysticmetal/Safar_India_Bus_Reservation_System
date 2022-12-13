import React from "react";

const Boarding = (prop) => {
  return (
    <>
      <div className="pickup-point b-p">
        <h2>Boarding Point</h2>
        {prop.data.map((ele) => (
          <div key={ele.name}>
            <input type="radio" name="bpoint" value={`${ele.time} | ${ele.name}`}/>
            <label> <strong> {ele.time}  </strong> | {ele.name} </label>
          </div>
        ))} 
      </div>
    </>
  );
};

export default Boarding;
