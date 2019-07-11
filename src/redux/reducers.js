const INITIAL_STATE = {
  cart: []
};

export default function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.item] };
    default:
      return state;
  }
}
