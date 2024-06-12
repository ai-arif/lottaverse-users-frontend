import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {getUserInformation,getReferralHierarchy,
    getReferralLevelCount,getCommissionHistories,getPurchaseHistories} from './userAPI'

export const fetchPurchaseHistories = createAsyncThunk(
    "user/fetchPurchaseHistories",
    async () => {
        const response = await getPurchaseHistories();
        return response;
    }
);

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

export const fetchCommissionHistories = createAsyncThunk(
    "user/fetchCommissionHistories",
    async () => {
        const response = await getCommissionHistories();
        return response;
    }
);

export const fetchReferralLevelCount = createAsyncThunk(
    "user/fetchReferralLevelCount",
    async () => {
        const response = await getReferralLevelCount();
        return response;
    }
);



export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {},
        structure: {},
        referralLevelCount: [],
        commissionHistories: [],
        purchaseHistories: [],
        lotteryId: "",
        ticketPrice: "",
        loading: false,
        error: null,
    },
    reducers: {
        setLotteryId: (state, action) => {
            state.lotteryId = action.payload;
        },
        setTicketPrice: (state, action) => {
            state.ticketPrice = action.payload;
        },
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
            .addCase(fetchReferralLevelCount.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchReferralLevelCount.fulfilled, (state, action) => {
                state.loading = false;
                state.referralLevelCount = action.payload?.data;
            })
            .addCase(fetchReferralLevelCount.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchCommissionHistories.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCommissionHistories.fulfilled, (state, action) => {
                state.loading = false;
                state.commissionHistories = action.payload?.data;
            })
            .addCase(fetchCommissionHistories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchPurchaseHistories.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPurchaseHistories.fulfilled, (state, action) => {
                state.loading = false;
                state.purchaseHistories = action.payload?.data;
            })
            .addCase(fetchPurchaseHistories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });

            

    },
});

export const { getUserStart,setLotteryId,setTicketPrice } = userSlice.actions;
export default userSlice.reducer;