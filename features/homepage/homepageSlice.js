import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getGraphData,getPackages } from "./homepageAPI";
const initialState = {
    status: "idle",
    message: "",
    packages:[],
    members: [],
};

export const fetchGraphData = createAsyncThunk(
    "homepage/fetchGraphData",
    async () => {
        const response = await getGraphData();
        return response;
    }
);

export const fetchPackages = createAsyncThunk(
    "homepage/fetchPackages",
    async () => {
        const response = await getPackages();
        return response;
    }
);

const homepageSlice = createSlice({
    name: "homepage",
    initialState,
    reducers: {
        setMembers: (state, action) => {
            state.members = action.payload;
        },
    },
    extraReducers:builder=> {
        builder
            .addCase(fetchGraphData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchGraphData.fulfilled, (state, action) => {
                state.status = "idle";
                state.message = action.payload.message;
                state.members = action.payload.data;
            })
            .addCase(fetchGraphData.rejected, (state) => {
                state.status = "error";
            })
            .addCase(fetchPackages.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchPackages.fulfilled, (state, action) => {
                state.status = "idle";
                console.log(action.payload)
                state.packages = action.payload?.data;
            })
            .addCase(fetchPackages.rejected, (state) => {
                state.status = "error";
            });
    },
});

export const { setMembers } = homepageSlice.actions;
export default homepageSlice.reducer;