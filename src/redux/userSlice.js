import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = null;
    },
  },
});

export const {setUser, logout} = userSlice.actions;

// export const selectCartItem = state => state.cart.item;

export default userSlice.reducer;
