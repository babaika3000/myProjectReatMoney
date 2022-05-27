import {createSlice} from "@reduxjs/toolkit";

export const UserDataReducer = createSlice({
  name: "UserData",
  initialState: {
    user:{
      name: '',
      email: '',
    },
  },
  reducers:{
    dataUser:(state, action) => {
    state.user = action.payload
    }
  }
})

export const {dataUser}  = UserDataReducer.actions
export default UserDataReducer.reducer
