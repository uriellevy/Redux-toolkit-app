import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, BASE_URL } from "../constants/ApiConsts";
import { WeeklyForcastData } from "../types/WeatherTypes";

interface InitialState {
    dailyForcast: WeeklyForcastData | undefined
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}


const initialState: InitialState = {
    dailyForcast: undefined,
    loading: "idle",
}


export const fetchWeeklyForcast = createAsyncThunk('weeklyForcast/getWeeklyForcast', async () => {
    const res = await fetch(`${BASE_URL}/locations/v1/cities/search?apikey=${API_KEY}&q=tokyo`);
    const data = await res.json();
    const res2 = await fetch(`${BASE_URL}/forecasts/v1/daily/5day/${data[0].Key}?apikey=${API_KEY}`);
    const data2 = await res2.json();
    return data2;
})

export const WeeklyForcastSlice = createSlice({
    name: 'weeklyForcast',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchWeeklyForcast.pending, (state) => {
            state.loading = "pending"
        })
        builder.addCase(fetchWeeklyForcast.fulfilled, (state, action) => {
            state.loading = "succeeded"
            state.dailyForcast = action.payload
        })
        builder.addCase(fetchWeeklyForcast.rejected, (state) => {
            state.loading = "failed"
        })
    },
})


export default WeeklyForcastSlice.reducer;