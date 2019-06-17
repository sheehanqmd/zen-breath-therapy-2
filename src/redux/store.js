import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import userReducer from "./redux/userReducer";




export default createStore(rootReducer, applyMiddleware(promiseMiddleware));