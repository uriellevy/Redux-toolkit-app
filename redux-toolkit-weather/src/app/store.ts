import {configureStore} from "@reduxjs/toolkit"
import citySearchReducer from "../features//SearchedCitySlice"
import cityDailyForcastReducer from "../features/DailyForcastSlice"
import cityWeeklyForcastReducer from "../features/weeklyForcastSlice"
import geoPositionReducer from "../features/GeoPositionSlice"

export const store = configureStore({
    reducer: {
        citySearch: citySearchReducer,
        cityDailyForcast: cityDailyForcastReducer,
        cityWeeklyForcast: cityWeeklyForcastReducer,
        geoPositionLocation: geoPositionReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch