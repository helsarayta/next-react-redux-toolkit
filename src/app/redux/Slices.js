import { createSlice } from "@reduxjs/toolkit";
import getUserList from "./actions";

const initialState = {
    users:[],
    isLoading: false,
    isSuccess: false,
    errorMessage:''
} 

export const sliceData = createSlice({
    name:"users",
    initialState,
    extraReducers:{
        [getUserList.pending]: (state) => {
            state.isLoading = true
        },
        [getUserList.fulfilled]: (state, action) => {
            state.isLoading = false,
            state.isSuccess = true,
            state.users = action.payload
        },
        [getUserList.rejected]: (state, {payload}) => {
            state.isLoading = false,
            state.isSuccess = false,
            state.users = [],
            state.errorMessage = payload
        }
    }
})


export default sliceData.reducer

