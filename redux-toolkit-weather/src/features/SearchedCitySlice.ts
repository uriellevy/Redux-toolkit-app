import {createSlice, createAsyncThunk, AsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {API_KEY, BASE_URL} from "../constants/ApiConsts";

interface InitialState {
    currentCity: []
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}


const initialState = {
    currentCity: [],
    loading: "idle",
} as InitialState


export const fetchCurrentCityData = createAsyncThunk('city/getCity', async () => {
    const res = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=tokyo`);
    const data = await res.json();
    return data[0]
})

export const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {},
    extraReducers: {
      [fetchCurrentCityData.pending.toString()]: (state:any) => {
        state.loading = true
      },
      [fetchCurrentCityData.fulfilled.toString()]: (state:any, { payload }:any) => {
        state.loading = false
        state.currentCity = payload
      },
      [fetchCurrentCityData.rejected.toString()]: (state:any) => {
        state.loading = false
      },
    },
  })
  
export default citySlice.reducer;


