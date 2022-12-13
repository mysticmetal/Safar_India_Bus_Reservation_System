import React from "react";

const pattern = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48,
];

const Layout = (prop) => {
  const { book } = prop;

  const handleClick = (e) => {
    e.target.parentElement.classList.toggle("bg-selec");
  };

  return (
    <>
      <div className="seater-layout">
        {pattern.map((ele) => {
          if (book.includes(`${ele}`)) {
            return (
              <div className="seat bg-unavail" key={ele}>
                <span>{ele}</span>
              </div>
            );
          } else {
            return (
              <div className="seat bg-avail" onClick={handleClick} key={ele}>
                <input type="checkbox" name="check_seat" value={ele} />

                <span>{ele}</span>
              </div>
            );
          }
        })}
        <div className="balcony"></div>
      </div>
    </>
  );
};

export default Layout;
