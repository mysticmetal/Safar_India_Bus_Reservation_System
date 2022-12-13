// root reducer file to combine all reducer 

//importing combineReducer 
import {combineReducers} from "redux";

//importing tripData reducer from reducer
 import { tripData , currSearch,timeModal,selecSeat,printTicket} from "./reducer";



 // exporting root reducer which combine all reducers
 export default combineReducers({
    tripData,currSearch,timeModal,selecSeat,printTicket
 })