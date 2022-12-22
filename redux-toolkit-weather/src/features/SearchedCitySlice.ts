import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, BASE_URL } from "../constants/ApiConsts";

interface InitialState {
    currentCity: []
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}


const initialState: InitialState = {
    currentCity: [],
    loading: "idle",
}


export const fetchCurrentCityData = createAsyncThunk('city/getCity', async () => {
    const res = await fetch(`${BASE_URL}/locations/v1/cities/search?apikey=${API_KEY}&q=tokyo`);
    const data = await res.json();
    return data[0];
})

export const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCurrentCityData.pending, (state) => {
            state.loading = "pending"
        })
        builder.addCase(fetchCurrentCityData.fulfilled, (state, action) => {
            state.loading = "succeeded"
            state.currentCity = action.payload
        })
        builder.addCase(fetchCurrentCityData.rejected, (state) => {
            state.loading = "failed"
        })
    },
})


export default citySlice.reducer;


