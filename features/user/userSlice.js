import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {getUserInformation,getReferralHierarchy} from './userAPI'

export const fetchUserInformation = createAsyncThunk(
    "user/fetchUserInformation",
    async (token) => {
        const response = await getUserInformation(token);
        return response;
    }
);

export const fetchReferralHierarchy = createAsyncThunk(
    "user/fetchReferralHierarchy",
    async () => {
        const response = await getReferralHierarchy();
        return response;
    }
);



export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {},
        structure: {},
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
            })
            .addCase(fetchReferralHierarchy.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchReferralHierarchy.fulfilled, (state, action) => {
                state.loading = false;
                state.structure = action.payload?.data;
            })
            .addCase(fetchReferralHierarchy.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            
    },
});

export const { getUserStart } = userSlice.actions;
export default userSlice.reducer;