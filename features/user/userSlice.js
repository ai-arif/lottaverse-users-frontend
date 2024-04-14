import { createSlice } from "@reduxjs/toolkit";
import {getUserInformation} from './userAPI'

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
    extraReducers: (builder) => {
        builder
        .addCase(getUserInformation.pending, (state) => {
            state.loading = true;
        })
        .addCase(getUserInformation.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload?.data;
        })
        .addCase(getUserInformation.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
    });

export const {  } = userSlice.actions;
export default userSlice.reducer;