export const tripData = (data = [], action) => {
  switch (action.type) {
    case "SET_TRIP":
      return action.data;

    case "LOAD_TRIP":
      return data;

    case "ERROR":
      data = [];
      return data;

    default:
      // no case matched
      return data;
  }
};

export const currSearch = (data = {}, action) => {
  switch (action.type) {
    case "SET_CURR_SEARCH":
      return action.obj;
    case "GET_CURR_SEARCH":
      return data;
    case "SET_NEW_DATE":
      if (data !== null) {
        data.date = action.newD;
      }
      return data;
    default:
      // no case matched
      return data;
  }
};

export const timeModal = (
  data = {
    status: false,
    stops: [],
  },
  action
) => {
  switch (action.type) {
    case "SET_TIME_MODAL":
      data.stops = action.data;
      return data;
    case "TOGGLE_MODAL":
      data.status = action.data;
      return data;
    default:
      return data;
  }
};


export const selecSeat = (data = {}, action) => {
  switch (action.type) {
    case "SET_SELEC_SEAT":
      return action.data;
   
    default:
      // no case matched
      return data;
  }
};



export const printTicket = (data = [], action) => {
  switch (action.type) {
    case "SET_PRINT_TICKET":
      // console.log("set ticket called");
      // console.log(action.data);
      return action.data;
   
    default:
      // no case matched
      return data;
  }
};