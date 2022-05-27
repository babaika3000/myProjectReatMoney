import {createSlice} from "@reduxjs/toolkit";

export const transactionReducer = createSlice({
  name:'transaction',
  initialState: {
    transactionList: [],
    usersList: [],
    transactionError: false,
    isLoading: false,
  },
  reducers: {
    setTransactionData: (state, action) => {
      state.transactionList = action.payload
    },
    setListUsers: (state, action) => {
      state.usersList = action.payload
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    }
  }
})
export const {setListUsers, setTransactionData,setLoading} = transactionReducer.actions

export default transactionReducer.reducer
