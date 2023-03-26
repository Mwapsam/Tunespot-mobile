import { createSlice } from '@reduxjs/toolkit';
import { postUser } from '../services/user.service';

const initialState = {
    user: null,
    error: "",
    file: null,
    isProfileComplete: false,
    loading: 'idle',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setFile: (state, action) => {
            state.file = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(postUser.pending, (state) => {
            state.loading = 'pending'
        });

        builder.addCase(postUser.rejected, (state, action) => {
            state.loading = 'failed'            
            state.error = action.error.message
        });

        builder.addCase(postUser.fulfilled, (state, action) => {            
            state.loading = 'succeeded';
            state.user = action.payload;
        });
    }
})

export default userSlice.reducer;