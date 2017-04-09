import { CartActionTypes } from './cart.actions';

export default (state = [], action: CartActionTypes) => {

    switch (action.type) {
        case "ADD_TO_CART":
            return [...state, action.itemId];
        case "REMOVE_FROM_CART":
            return state.filter(id => id !== action.itemId);
        case "CLEAR_CART":
            return state = [];
        default:
            return state;
    }
};