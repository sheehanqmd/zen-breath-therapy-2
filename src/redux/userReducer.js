import axios from "axios";

const initialState = {
  loading: false,
  user: []
};

const GET_USER = "GET_USER";

export function getUser() {
  return {
    type: GET_USER,
    payload: axios.get("/auth/user").catch(err => err)
  };
}

export default function userReducer(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case `${GET_USER}_FULFILLED`:
      return {
        ...state,
        loading: false,
        user: action.payload.data
      };

    case `${GET_USER}_PENDING`:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}