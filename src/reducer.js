export const initialState = {
    basket: []
}

const reducer = (state, action) => {
    debugger
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            const newBasket = [...state.basket];
            const index = state.basket.findIndex((e) => e.id === action.id)
            if (index >= 0) {
                newBasket.splice(index, 1);
            }
            return {
                ...state,
                basket: newBasket
            };
        default:
            return state;
    }
}

export default reducer;