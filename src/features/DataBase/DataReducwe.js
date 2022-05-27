import {createSlice} from "@reduxjs/toolkit";

const initialState = [{
  data:[],
}
]


export const dataReducer = createSlice({
    name: "Data",
    initialState,
    reducers:{
      onChangeData:(state, action) => {
        state.data = action.payload
      }},
  }
)

export const {onChangeData} = dataReducer.actions
export default dataReducer.reducer
