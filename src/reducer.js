export const initialState = {
    basket: [],
    user: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
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