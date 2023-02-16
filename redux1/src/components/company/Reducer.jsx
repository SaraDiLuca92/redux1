let initialState = {
  cart: [],
};
const Reducer = (state = initialState, action) => {
  if (action.type === "ADD") {
    let tempcart = state.cart.filter((data) => data._id === action.payload._id);
    if (tempcart.length < 1) {
      return { ...state, cart: [...state.cart, action.payload] };
    } else {
      return state;
    }
  }
};
export default Reducer;
