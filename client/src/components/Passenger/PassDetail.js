import React  from "react";


const PassDetail = (prop) => {

  return (
    <>
      <section className="passenger-detail">
        {prop.data.map((ele, ind) => (
          <div className="psg-sec" key={ind}>
            <span>
              Passenger {ind +1} | <strong>Seat {ele} </strong>
            </span>
            <div className="psg-sec-det">
              <select name="gen" defaultValue="male" >
                <option value="male"   >
                  Male
                </option>
                <option value="female" >Female</option>
                <option value="other">Other</option>
              </select>
              <input
                type="text"
                name="pag_name"
                placeholder="Enter Full Name"
                
              />
            </div>
          </div>
        ))}

       
      </section>
    </>
  );
};

export default PassDetail;
