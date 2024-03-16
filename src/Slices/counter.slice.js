import { createSlice } from "@reduxjs/toolkit";

//initialized variable value as 0
const initialValue ={
    value:0
}

const counterSlice = createSlice({
    //createslice excepts name attribute in our componenet no. of slices will present so without any confusion giving unique name esy to identitfy
    name:'counterslice',
    initialState:initialValue,
    //reducer take as object which is used to manuplate value the one to another
    reducers:{
        increment: (state, action)=>{
            //here value is 0 now state.value is 0 +1 gives 1 this 1 value mapped to value parameter that value 1 update the obj send to redux
            //and return value store to store.js
            return {value: state.value+1}
        },
        decrement: (state, action)=>{
            return {value: state.value-1}
        },
        reset: ()=>{
            return {value:0}
        }
    }
});
//now am creating reducer instance and action instance we can invoke in components
export const {increment, decrement, reset} =counterSlice.actions;
//here in this reducer if you have collection of reducers comes here.
// we need to map reducers in store.js file
export default counterSlice.reducer;

