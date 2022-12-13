import { takeEvery, put } from "redux-saga/effects";

function* searchTrips(action) {
  
  try {
    const res = yield fetch("/api/booking/getAvailableTrips", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fromCity: action.obj.from,
        toCity: action.obj.to,
        date: action.obj.date,
      }),
    });
    const data = yield res.json();

    if (res.status === 200) {
      yield put({ type: "SET_TRIP", data: data });
    }
  } catch (err) {
    yield put({ type: "ERROR" });
  }
}


function* searchTicket(action) {
  // console.log("print ticket called");
  try {
    const res = yield fetch("/api/booking/getTicket", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(action.data),
    });
    const data = yield res.json();
// console.log(data);
    if (res.status === 202) {
      yield put({ type: "SET_PRINT_TICKET", data: data });
    }
  } catch (err) {
    yield put({ type: "SET_PRINT_TICKET", data: []});
  }
}




function* Saga() {
  yield takeEvery("SEARCH_TRIP", searchTrips);
  yield takeEvery("PRINT_TICKET", searchTicket);

}

export default Saga;
