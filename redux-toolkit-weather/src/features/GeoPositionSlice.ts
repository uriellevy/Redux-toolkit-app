import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { API_KEY, BASE_URL } from "../constants/ApiConsts";
import { City } from "../types/WeatherTypes";

interface InitialState {
    currentLocationData: City | undefined
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
    coords: Coords
}

interface Coords {
    latitude: number,
    longitude: number,
}


const initialState: InitialState = {
    currentLocationData: undefined,
    coords: {
        latitude: 68,
        longitude: 84,
    },
    loading: "idle",
}


export const fetchDeviceLocation = createAsyncThunk('location/getLocation', async () => {
    const res = await fetch(`${BASE_URL}/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${initialState.coords.latitude},${initialState.coords.longitude}`);
    const data = await res.json();
    return data;
})


export const GeoPositionSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        currentCoords(state, action: PayloadAction<Coords>) {
            state.coords = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDeviceLocation.pending, (state) => {
            state.loading = "pending"
        })
        builder.addCase(fetchDeviceLocation.fulfilled, (state, action) => {
            state.loading = "succeeded"
            state.currentLocationData = action.payload
        })
        builder.addCase(fetchDeviceLocation.rejected, (state) => {
            state.loading = "failed"
        })
    },
})

export const { currentCoords } = GeoPositionSlice.actions;


export default GeoPositionSlice.reducer;


