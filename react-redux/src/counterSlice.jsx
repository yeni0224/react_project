import {createSlice} from '@reduxjs/toolkit'

//reducer + action
const counterSlice = createSlice({
    name:"counter",
    initialState:{value : 0},
    reducers:{
        increment:(state) =>{state.value += 1;},
        decrement:(state) =>{state.value -= 1;}
    }
})
export const {increment, decrement} = counterSlice.actions;//구조분해
export default counterSlice.reducer;