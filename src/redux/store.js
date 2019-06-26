import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import userReducer from "./userReducer";
// import eventReducer from "./eventReducer";


const rootReducer = combineReducers({
    // cart: cartReducer,
    // event: eventReducer,
    user: userReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));