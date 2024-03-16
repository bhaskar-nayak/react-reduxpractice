import { configureStore } from "@reduxjs/toolkit";
import counterReducers from './Slices/counter.slice';
import usersReducer from './Slices/users.slice'
export const store = configureStore({
    reducer:{
        //initial variable name take as counter 
        counter: counterReducers, //what ever structer we are created in slice.js all the reducers comes here like object updated value like
        //{value : 0}thid obj automatically redux take care of it from slice and 
        //it will replace from the store from store automatically get the data in the index.js
        users:usersReducer,
    }
})