import validator from "validator";
import alertwindow from "../Popup";

const SelectSeatValidator = (obj) => {
  if (validator.isEmpty(obj.bpoint) || validator.isEmpty(obj.dpoint)) {
    alertwindow.openalert({
      title: "Missing Fields",
      content: "Please Choose Boarding & Droping Point",
      type: "warn",
      icon: "fa-exclamation-circle",
    });
    return false;
  }

  if (validator.isEmpty(obj.id) || validator.isEmpty(obj.fare)) {
    alertwindow.openalert({
      title: "Something went Wrong",
      content: "Please Go to Homepage and Try Again",
      type: "danger",
      icon: "fa-times-circle",
    });
    return false;
  }


  if (obj.selec.length <= 0) {
    alertwindow.openalert({
      title: "No Seat Selected",
      content: "Please Choose Seat",
      type: "warn",
      icon: "fa-exclamation-circle",
    });
    return false;
  }

  return true;
};

export default SelectSeatValidator;
