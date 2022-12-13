//=======> REDUX STORE 

import { configureStore } from "@reduxjs/toolkit";


// import saga file
import Saga from "./saga";

// import rootReducer
import rootReducer from "./rootReducer";

// import create Saga Middleware
import createSagaMiddleware  from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware:[sagaMiddleware]
    
  
});


// run productSaga file when middleware called 
sagaMiddleware.run(Saga);


export default store;
