export const searchTrip = (obj) => {
  return {
    type: "SEARCH_TRIP",
    obj,
  };
};

export const currSearch = (obj) => {
  return {
    type: "SET_CURR_SEARCH",
    obj,
  };
};

export const getCurrSearch = () => {
  return {
    type: "GET_CURR_SEARCH",
  };
};

export const setNewDate = (newD) => {
  return {
    type: "SET_NEW_DATE",
    newD,
  };
};

export const loadTrip = () => {
  return {
    type: "LOAD_TRIP",
  };
};

export const setTimeModal = (data) => {
  return {
    type: "SET_TIME_MODAL",
    data,
  };
};

export const modalStatus = (stat) => {
  return {
    type: "TOGGLE_MODAL",
    data: stat,
  };
};

export const setSelectedSeat =(data)=>{
  return{
    type:"SET_SELEC_SEAT",
    data

  }
}


export const setPrintTicket =(data)=>{
  return{
    type:"PRINT_TICKET",
    data

  }
}
