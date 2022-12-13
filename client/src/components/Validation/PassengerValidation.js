import validator from "validator";
import alertwindow from "../Popup";

const PassengerValidation = (obj) => {
  if (!validator.isEmail(obj.email)) {
    alertwindow.openalert({
      title: "Invalid Email",
      content: "Please fill Correct Email",
      type: "warn",
      icon: "fa-exclamation-circle",
    });
    return false;
  }

  if (
    obj.phoneno < 6000000000 ||
    obj.phoneno > 9999999999 ||
    Number.isNaN(obj.phoneno)
  ) {
    alertwindow.openalert({
      title: "Invalid Contact No",
      content: "Please Enter Correct Indian Mobile no (10 digits) ",
      type: "warn",
      icon: "fa-exclamation-circle",
    });
    return false;
  }

  let flag = obj.peoples.every((ele) => {
    if (ele.length > 3 || ele.length <= 0) {
      alertwindow.openalert({
        title: "Internal Error",
        content: "Please Back to Homepage and Try Again ",
        type: "danger",
        icon: "fa-times-circle",
      });
      return false;
    }
    if (/^[a-zA-Z\s]+$/.test(ele[1])) {
    } else {
      alertwindow.openalert({
        title: "Enter Valid Name",
        content: "Name field with Only Alphabets",
        type: "warn",
        icon: "fa-exclamation-circle",
      });
      return false;
    }

    if (ele[2] === "male" || ele[2] === "female") {
    } else {
      alertwindow.openalert({
        title: "Choose Gender",
        content: "Please Select any One of Gender ",
        type: "warn",
        icon: "fa-exclamation-circle",
      });
      return false;
    }

    if (ele[1].length <= 2 || ele[0].search("  ") !== -1) {
      alertwindow.openalert({
        title: "Enter Valid Name",
        content: "Please Enter Appropriate Name",
        type: "warn",
        icon: "fa-exclamation-circle",
      });
      return false;
    }
    return true;
  });

  return flag;
};

export default PassengerValidation;
