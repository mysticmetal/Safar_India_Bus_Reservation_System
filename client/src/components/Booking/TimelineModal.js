import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { modalStatus, setTimeModal } from "../../redux/action";

import { useNavigate } from "react-router-dom";

const TimelineModal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const modalData = useSelector((state) => state.timeModal);

  const handleModal = () => {
    dispatch(setTimeModal([]));
    dispatch(modalStatus(false));
    navigate("/booking");
  };

  if (modalData.status) {
    
    return (
      <div className="modal-wrapper active">
        <div className="modal-container">
          <button className="close" onClick={handleModal}>
            ×
          </button>
          <h2 className="modal-title">Timeline</h2>
          <hr />
          <div className="modal-content timeline-section">
            {modalData.stops.map((element) => (
              <section key={element.name}>
                <i className="fa-solid fa-bus-simple timeline-ico" />
                <p className="timeline-place">{element.name}, {element.city}</p>
                <p className="timeline-time"> {element.time}</p>
              </section>
            ))}
            
          </div>
        </div>
      </div>
    );
  } else {
    return "";
  }
};

export default TimelineModal;
