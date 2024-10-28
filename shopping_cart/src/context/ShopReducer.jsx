import React, { useReducer } from 'react';

const initialState = {
    cart: [],
};



function cartReducer  (state, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingItem = state.cart.find(item => item.id ===action.payload.id);

            if(existingItem){
                return{
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === action.payload.id ? {...item, quantity: item.quantity + 1} : item
                    ),
                };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, {...action.payload, quantity: 1}],
                };
            }

        case 'REMOVE_FROM_CART':
                return {
                    ...state,
                    cart: state.cart.map(item => item.id === action.payload.id ? {...item, quantity: item.quantity - 1 } : item)
                    .filter(item => item.quantity > 0),
                };
        default:
            return state;
    }

}

export default cartReducer;
