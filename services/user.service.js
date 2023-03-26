import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const postUser = createAsyncThunk(
    'register/postUser', async (user) => {
        try{
            const response = await axios.post('https://tunespot.biz/users', user);
            const res = await response.data;
                return res;
        } catch(error){
            throw new Error(error.response.data)
        }
    }
)
