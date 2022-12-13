import validator from "validator";
import alertwindow from "../Popup";

var prevDate=new Date();
prevDate.setDate(prevDate.getDate() -1);

const TripSearchValidator = (obj) => {
    if(!validator.isAfter(obj.date,prevDate.toISOString().substring(0, 10))){
        alertwindow.openalert({
          title: "Invalid Search",
          content: "Please Enter Correct Date",
          type: "danger",
          icon: "fa-times-circle",
        });
        return false;
      }
  
      if (validator.isEmpty(obj.from) || validator.isEmpty(obj.to)) {
        alertwindow.openalert({
          title: "Invalid Search",
          content: "Please Enter From & To City",
          type: "danger",
          icon: "fa-times-circle",
        });
        return false;
      }
  if(validator.equals(obj.from,obj.to)){
    alertwindow.openalert({
      title: "Invalid Search",
      content: "From & To City Cannot Be same",
      type: "danger",
      icon: "fa-times-circle",
    });
    return false;
  }

  return true;
}

export default TripSearchValidator;