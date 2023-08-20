import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getUserList = createAsyncThunk('user/getUserList', async(rejectWithValue) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log("DATA => ", response.data)
        return response.data;

    } catch (err) {
        return rejectWithValue(err.message)
    }
    } 
)

export default getUserList