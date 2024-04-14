import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {getUserInformation} from './userAPI'

export const fetchUserInformation = createAsyncThunk(
    "user/fetchUserInformation",
    async (token) => {
        const response = await getUserInformation(token);
        return response;
    }
);


export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {},
        loading: false,
        error: null,
    },
    reducers: {
        getUserStart: (state) => {
        state.loading = true;
        },
        getUserSuccess: (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
        },
        getUserFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        },
    },
    extraReducers:builder=> {
        builder
            .addCase(fetchUserInformation.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUserInformation.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload?.data;
            })
            .addCase(fetchUserInformation.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { getUserStart } = userSlice.actions;
export default userSlice.reducer;