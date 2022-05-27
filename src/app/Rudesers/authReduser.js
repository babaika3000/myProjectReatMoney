import {createSlice} from "@reduxjs/toolkit";

export const authReducer = createSlice({
  name: 'usersAuth',
  initialState:{
    isAuth: false
  },
  reducers:{
    userAuth:(state,action) => {
      state.isAuth = action.payload
    }
  }

})
export const {userAuth} = authReducer.actions
export default authReducer.reducer



