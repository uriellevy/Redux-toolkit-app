import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, BASE_URL } from "../constants/ApiConsts";
import {DailyForcastData} from "../types/WeatherTypes"

interface InitialState {
    dailyForcast: any
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}


const initialState: InitialState = {
    dailyForcast: undefined,
    loading: "idle",
}


export const fetchDailyForcast = createAsyncThunk('dailyForcast/getDailyForcast', async () => {
    const res = await fetch(`${BASE_URL}/locations/v1/cities/search?apikey=${API_KEY}&q=tokyo`);
    const data = await res.json();
    const res2 = await fetch(`${BASE_URL}/forecasts/v1/daily/1day/${data[0].Key}?apikey=${API_KEY}`);
    const data2 = await res2.json();
    return data2;
})

export const dailyForcastSlice = createSlice({
    name: 'dailyForcast',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchDailyForcast.pending, (state) => {
            state.loading = "pending"
        })
        builder.addCase(fetchDailyForcast.fulfilled, (state, action) => {
            state.loading = "succeeded"
            state.dailyForcast = action.payload
        })
        builder.addCase(fetchDailyForcast.rejected, (state) => {
            state.loading = "failed"
        })
    },
})


export default dailyForcastSlice.reducer;