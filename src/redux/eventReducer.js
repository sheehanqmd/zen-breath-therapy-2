// import axios from "axios";

// const initialState = {
//   loading: false,
//   event: []
// };

// const GET_USER = "GET_EVENT";
// const ADD_TO_CART = "ADD_TO_CART";
// const REMOVE_FROM_CART = "REMOVE_FROM_CART";
// const CHECKOUT = "CHECKOUT";

// export function getEvent() {
//     return {
//         type: GET_EVENT,
//         payload: axios.get("/api/event").then(err => err)  
//     };
// }

// export default function eventReducer(state = initialState, action) {

//     switch (action.type) {
//         case `${GET_EVENT}_FULFILLED`:
//             return {
//                 ...state,
//                 loading: false,
//                 user: action.payload.data
//             };

//             case `${GET_EVENT}_PENDING`:
//                 return {
//                     ...state,
//                     loading: true
//                 };
//                 default:
//                     return state;
//     }
// }