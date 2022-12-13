import React from 'react'

const TripSummary = (prop) => {


const date=new Date(prop.data.date).toUTCString().substring(0,16);
const time=prop.time.slice(0,prop.time.indexOf("|"));




  return (
    <>
    <section className="trip-summary">
            <i className="fa-solid trip-summ-ico fa-circle-chevron-right" />
            <div className="trip-summ-detail">
              <h3>{prop.data.from} to {prop.data.to}</h3>
              <p>{date} | {time}</p>
            </div>
          </section>
    </>
  )
}

export default TripSummary