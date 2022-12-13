import React from "react";

let sleepPattern = [
  1, 6, 7, 12, 13, 18, 2, 5, 8, 11, 14, 17, 3, 4, 9, 10, 15, 16,
];

const handleClick = (e) => {
  e.target.parentElement.classList.toggle("bg-selec");
};

const SleeperLayout = (prop) => {
  const { book } = prop;

  return (
    <>
      <div className="sleeper-layout">
        <div className="sleep-balcony" />
        {sleepPattern.map((ele) => {
          if (book.includes(`LD${ele}`)) {
            return (
              <div className="sleep-seat bg-unavail" key={ele}>
                {/* <input type="checkbox" name="check_seat" value={`LD${ele}`} /> */}
                <span>LD{ele}</span>
              </div>
            );
          } else {
            return (
              <div
                className="sleep-seat bg-avail"
                onClick={handleClick}
                key={ele}
              >
                <input type="checkbox" name="check_seat" value={`LD${ele}`} />
                <span>LD{ele}</span>
              </div>
            );
          }
        })}
      </div>
      <hr />
      <div className="sleeper-layout">
        <div className="sleep-balcony" />
        {sleepPattern.map((ele) => {
          if (book.includes(`UD${ele}`)) {
            return (
              <div className="sleep-seat bg-unavail" key={ele}>
                <span>UD{ele}</span>
              </div>
            );
          } else {
            return (
              <div
                className="sleep-seat bg-avail"
                onClick={handleClick}
                key={ele}
              >
                <input type="checkbox" name="check_seat" value={`UD${ele}`} />
                <span>UD{ele}</span>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default SleeperLayout;
