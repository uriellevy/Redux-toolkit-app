import {createSlice, createAsyncThunk, AsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {API_KEY, BASE_URL} from "../constants/ApiConsts";

interface InitialState {
    currentCity: any
    loading: boolean
  }

const initialState: InitialState = {
    currentCity: [],
    loading: false,
}

export const fetchCurrentCityData = createAsyncThunk<any, any>('city/getCity', async () => {
    const res = await fetch(`${BASE_URL}/forecasts/v1/daily/1day/215854?apikey=${API_KEY}`);
    const data = await res.json();
    return data.DailyForecasts[0]
})

// export const citySlice = createSlice({
//     name: 'city',
//     initialState,
//     reducers: {},
//     extraReducers: {
//       [fetchCurrentCityData.pending]: (state:any) => {
//         state.loading = true
//       },
//       [fetchCurrentCityData.fulfilled]: (state:any, { payload }:any) => {
//         state.loading = false
//         state.currentCity = payload
//       },
//       [fetchCurrentCityData.rejected]: (state:any) => {
//         state.loading = false
//       },
//     },
//   })
  
// export default citySlice.reducer;


