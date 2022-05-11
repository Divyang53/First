import { combineReducers } from "redux";
// import logindetailsReducer from "./Reducer";
import registrationReducer from "./Reducer";
 


const rootReducer = combineReducers({
    newuser:  registrationReducer, 
    // user: logindetailsReducer
})

export default rootReducer;