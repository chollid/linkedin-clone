import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  value: 0,
  status: 'idle',
};



export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.user += null;
    },
  },

});

export const { login, logout } = userSlice.actions;


// **Selectors** Pulls in information from the store
export const selectUser = (state) => state.user.user;


export default userSlice.reducer;
