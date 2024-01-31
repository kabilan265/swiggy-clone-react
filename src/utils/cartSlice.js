import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    restuarantDetails: {},
  },
  reducers: {
    addItem: (state, action) => {
      console.log("slice" + action.payload);
      let flag = false,
        i;
      for (i = 0; i < state.items.length; i++) {
        if (action.payload.card.info.id === state.items[i].card.info.id) {
          state.items[i].card.info.count = action.payload.card.info.count;
          flag = true;
          break;
        }
      }
      if (!flag) {
        state.items.push(action.payload);
        return;
      }

      if (action.payload.card.info.count === 0) {
        for (let j = i; j < state.items.length - 1; j++) {
          state.items[j] = state.items[j + 1];
        }
        state.items.length = state.items.length - 1;
      }
    },
    clearItems: (state) => {
      state.items.length = 0;
    },
    setRestuarantDetails: (state, action) => {
      state.restuarantDetails = action.payload;
      /* return{
                ...state,
                restuarantDetails:action.payload
            } */
    },
  },
});
export const { addItem, clearItems, setRestuarantDetails } = cartSlice.actions;
export default cartSlice.reducer;
