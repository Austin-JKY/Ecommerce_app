import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  item: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // console.log(action.payload);
      // state.item = [...state.item, action.payload];
      const find = state.item?.find(item => item.id === action.payload.id);
      if (find) {
        // console.log(find);
        const reslut = state.item.map(item =>
          item.id === find.id ? {...item, qty: item.qty + 1} : item,
        );
        state.item = reslut;
      } else {
        state.item = [...state.item, action.payload];
      }
    },

    removeItemFromCart: (state, action) => {
      state.item = state.item.filter(item => item.id !== action.payload);
    },

    addQty: (state, action) => {
      const reslut = state.item.map(item =>
        item.id === action.payload ? {...item, qty: item.qty + 1} : item,
      );
      state.item = reslut;
    },

    minusQty: (state, action) => {
      const updatedItems = state.item.map(item => {
        if (item.id === action.payload) {
          const updatedQty = item.qty - 1;
          if (updatedQty <= 0) {
            return null;
          }
          return {...item, qty: updatedQty};
        }
        return item;
      });
      state.item = updatedItems.filter(item => item !== null);
    },
  },
});

export const {addToCart, removeItemFromCart, addQty, minusQty} =
  cartSlice.actions;

// export const selectCartItem = state => state.cart.item;

export default cartSlice.reducer;
