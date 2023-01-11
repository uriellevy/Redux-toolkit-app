import React, { useEffect, useState } from 'react';
import classes from "./Home.module.scss";
import MainItem from './MainItem';
import WeeklyForcast from './WeeklyForcast';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchCurrentCityData } from '../../features/SearchedCitySlice';
import { fetchDailyForcast } from '../../features/DailyForcastSlice';
import { fetchWeeklyForcast } from '../../features/weeklyForcastSlice';
import { fetchDeviceLocation } from '../../features/GeoPositionSlice';
import Search from './Search';
import { InfinitySpin } from 'react-loader-spinner'
import { currentCoords } from '../../features/GeoPositionSlice';




const Home = () => {
    const city = useAppSelector(state => state.citySearch);
    const dailyForcast = useAppSelector(state => state.cityDailyForcast);
    const weeklyForcast = useAppSelector(state => state.cityWeeklyForcast);
    const citySubmitted = useAppSelector(state => state.citySearch.city);
    // const deviceLocationData = useAppSelector(state => state.geoPositionLocation.currentLocationData)
    // const test = useAppSelector(state => state.geoPositionLocation.coords)
    // const [coords, setCoords] = useState({
    //     latitude: 0,
    //     longitude: 0,
    // })
    const dispatch = useAppDispatch();
    const isFetchSucceeded = city.loading === "succeeded" && dailyForcast.loading === "succeeded" && weeklyForcast.loading === "succeeded";
    useEffect(() => {
      dispatch(fetchCurrentCityData())
      dispatch(fetchDailyForcast())
      dispatch(fetchWeeklyForcast())
    }, [citySubmitted])

    console.log(isFetchSucceeded)




    // useEffect(() => {
    //     navigator.geolocation.watchPosition(
    //         successCallback,
    //         errorCallback
    //     );
    //     // dispatch(fetchDeviceLocation())
    // }, [test])
    // console.log(test, deviceLocationData)

    // const successCallback = (position: any) => {
    //     console.log(position);
    //     dispatch(currentCoords({
    //         latitude: position.coords.latitude,
    //         longitude: position.coords.longitude,
    //     }))
    // };

    // const errorCallback = (error: any) => {
    //     console.log(error);
    // };




    return (
        <div className={classes.homeContainer}>
            <Search />
            {isFetchSucceeded ?
                <>
                    <MainItem dailyForcast={dailyForcast.dailyForcast} city={city.currentCity} />
                    <WeeklyForcast weeklyForcast={weeklyForcast.dailyForcast} />
                </>
                :
                <InfinitySpin
                    width='200'
                    color="#1d5372"
                />
            }
        </div>
    )
}

export default Home