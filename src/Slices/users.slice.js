import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialValue= {
    //if there is any loading symble map under isloading false
    //request is not in progress make it is loading as false
    //if it is true isloading as true
    isloading:false,
    //if 
    data:[],
    //if there is any error we are map in error or else
    //it is success map in data:[]
    error:null,
};
//we are using asyncthunk because we are making api call by it
//we are not making straight forward api call it take some time 
//to execute backend source code then it will fecth all the data
export const fetchAllUsers =createAsyncThunk('users/all', ()=>{
//async expects two parameters 1st action and callback func
//in callback func when it invoke it what ever in callback logic will execute
return axios.get('https://jsonplaceholder.typicode.com/users').then(response =>{
    //once we recieve api response it will goes to then promise method and else error
    console.log(response.data);
    return response.data;
}).catch(error =>{
    return error;
})
});

const usersSlice= createSlice({
    name:'users',
    initialState:initialValue,
    reducers:{
        //here we are creating any reducers bcoz working with asynchronous api 
        //then we are need to work with extraReducers it will handle the async api
    },
    extraReducers:(builder) =>{ //it will return the builder instance
        builder
               .addCase(fetchAllUsers.pending, (state) =>{ //in this calback state it get api data
                //pending state is used to make asynchronous success 
                state.isloading= true;
               })
               .addCase(fetchAllUsers.fulfilled, (state, action) =>{//in payload get the response
                state.isloading=false;
                //once we get the response we are going to stop the spinner
                state.data=action.payload;//to get the data in components
               })
               .addCase(fetchAllUsers.rejected, (state, action) =>{
                state.isloading=false;
                state.error=action.payload;
               })
    }
})
export default usersSlice.reducer;//we don't need to create actions for reducers just call it actions will created by asyncthunk