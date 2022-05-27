import {createSlice} from "@reduxjs/toolkit";

export const UserDataReducer = createSlice({
  name: "user",
  initialState: {
    user:{
      name: '',
      email: '',
      balance: "",
    },
  },
  reducers:
    {
    dataUser:(state, action) => {
    state.user = action.payload
    }
  }
})

export const {dataUser}  = UserDataReducer.actions
export default UserDataReducer.reducer
