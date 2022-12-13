import React from 'react'

const Droping = (prop) => {
  return (
    <>
     <div className="pickup-point d-p">
        <h2>Drop Point</h2>
        {prop.data.map((ele) => (
          <div key={ele.name}>
            <input type="radio" name="dpoint" value={`${ele.time} | ${ele.name}`}/>
             <label> <strong> {ele.time} </strong> | {ele.name} </label>
          </div>
        ))} 
      </div>
    </>
  )
}

export default Droping