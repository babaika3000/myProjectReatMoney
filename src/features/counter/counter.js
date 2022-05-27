import { createSlice} from "@reduxjs/toolkit";

const initialState ={
  value: 0,
}

export const counterReducer = createSlice({
  name: 'counter',
  initialState,
  reducers:{
    countChange:(state, action) => {
    state.value = action.payload
  }},
})

export const {countChange} = counterReducer.actions
export default counterReducer.reducer
