import React, { useState } from "react";

const FareDetail = (prop) => {
  let fare = parseInt(prop.fare) * prop.seatCount;

  const [discount, setdiscount] = useState(0);

  const [coupon, setcoupon] = useState("");

  const [couponStat, setcouponStat] = useState({
    status: false,
    msg: "",
  });

  let value;

  const handleInputs = (e) => {
    value = e.target.value;
    setcoupon(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/booking/checkCoupon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          couponCode: coupon,
        }),
      });
      const data = await res.json();

      if (res.status === 202) {
        let temp = parseInt(fare * data.discount);

        if (temp > data.max) {
          setdiscount(data.max);
        } else {
          setdiscount(temp);
        }
        setcouponStat({
          status: true,
          msg: "Coupon Applied Sucessfully",
        });
      }
     
    } catch (err) {
      setdiscount(0);
      setcoupon("");
      setcouponStat({
        status: false,
        msg: "Invalid Coupon",
      });
      
    }
  };

  // useEffect(() => {
  //   handleSubmit();
  //   // eslint-disable-next-line
  // }, []);

  return (
    <>
      <section className="coupon-detail">
        <i className={couponStat.status?"fa-solid fa-circle-check ":"fa-solid fa-circle-check text-fade"} />
        <input
          type="text"
          className="coupon-box"
          name="couponB"
          value={coupon}
          onChange={handleInputs}
          placeholder="Enter Coupon Code"
        />
        <button className="coupon-btn" onClick={handleSubmit}>
          Apply
        </button>
        <span>{couponStat.msg}</span>
      </section>

      <h2>Fare Breakup</h2>
      <section className="fare-detail">
        <div>
          <p>Base Fare</p>
          <p> ₹ {fare}</p>
        </div>
        <div className="t-g">
          <p>Discount</p>
          <p> - ₹ {discount}</p>
        </div>
        <hr />
        <div className="t-b">
          <p>Total Fare</p>
          <p> ₹ {fare - discount}</p>
        </div>
        <div>
          <p>GST</p>
          <p> + ₹ {parseInt((fare - discount) * 0.18)}</p>
        </div>
        <div className="t-bg-v">
          <p>NET AMOUNT</p>
          <p> ₹ {parseInt(fare - discount + (fare - discount) * 0.18)}</p>
        </div>
      </section>
      <section className="final-pay-sec">
       
          <input
            type="number"
            name="netfare"
            readOnly
            value={parseInt(fare - discount + (fare - discount) * 0.18)}
          />{" "}
       
        <button onClick={prop.sub}>Pay and Book Now</button>
      </section>
    </>
  );
};

export default FareDetail;
