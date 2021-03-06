const INITIAL_STATE = {
  cart: []
};

export default function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.item] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(item => item.name !== action.item.name)
      };
    case "CLEAR_CART":
      return {
        cart: []
      };
    default:
      return state;
  }
}
