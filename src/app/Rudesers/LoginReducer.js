import {createSlice} from "@reduxjs/toolkit";

export const LoginReducer = createSlice({
  name:'login',
  initialState:  {
  login: '',
    transaction: {
    error:false,
  }
},
reducers: {
  getError: (state, action) => {
    state.login = action.payload
  },
    deleteError: (state, action) => {
    state.login = false
  }
}
})

export const {getError,deleteError} = LoginReducer.actions

export default LoginReducer.reducer



