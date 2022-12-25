import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import { API_KEY, BASE_URL } from "../constants/ApiConsts";

interface InitialState {
    currentCity: []
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
    city: string
}


const initialState: InitialState = {
    currentCity: [],
    loading: "idle",
    city: "tel aviv",
}


export const fetchCurrentCityData = createAsyncThunk('city/getCity', async () => {
    const res = await fetch(`${BASE_URL}/locations/v1/cities/search?apikey=${API_KEY}&q=tokyo`);
    const data = await res.json();
    return data[0];
})


export const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        submittedCity(state, action: PayloadAction<string>) {
            state.city = action.payload
          },
    },
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

export const { submittedCity } = citySlice.actions;

export default citySlice.reducer;


