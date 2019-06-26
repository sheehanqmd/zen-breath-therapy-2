import axios from "axios";

const initialState = {
    loading: false,
    cart: []
  
  };

const ADD_TO_CART = "ADD_TO_CART";
const DELETE_FROM_CART = "DELETE_FROM_CART";
const CHECKOUT = "CHECKOUT";

export function addToCart() {
    return {
        type: ADD_TO_CART,
        payload: axios.post("/api/cart").then(err => err)
    }
};

export function deleteFromCart() {
    return {
        type: DELETE_FROM_CART, 
        payload: axios.delete("/api/cart/:index").then(err => err)
    }
}

export function checkout() {
    return {
        type: CHECKOUT,
        payload: app.post("/api/cart/checkout").then(err => err)
    }
} 


export default function cartReducer(state = initialState, action) {

    switch (action.type) {
        case `${ADD_TO_CART}_FULFILLED`:
            return {
                ...state,
                loading: false,
                user: action.payload.data
            };

            case `${ADD_TO_CART}_PENDING`:
                return {
                    ...state,
                    loading: true
                };
                default:
                    return state;
    };

}
switch (action.type) {
    case `${DELETE_FROM_CART}_FULFILLED`:
        return {
            ...state,
            loading: false,
            user: action.payload.data
        };

        case `${DELETE_FROM_CART}_PENDING`:
            return {
                ...state,
                loading: true
            };
            default:
                return state;
}



