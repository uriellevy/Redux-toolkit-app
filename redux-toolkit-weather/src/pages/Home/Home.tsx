import React, { useEffect } from 'react';
import classes from "./Home.module.scss";
import MainItem from './MainItem';
import WeeklyForcast from './WeeklyForcast';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchCurrentCityData } from '../../features/SearchedCitySlice';
import { fetchDailyForcast } from '../../features/DailyForcastSlice';
import { fetchWeeklyForcast } from '../../features/weeklyForcastSlice';
import Search from './Search';



const Home = () => {
    const city = useAppSelector(state => state.citySearch);
    const dailyForcast = useAppSelector(state => state.cityDailyForcast);
    const weeklyForcast = useAppSelector(state => state.cityWeeklyForcast);
    const citySubmitted = useAppSelector(state => state.citySearch.city);
    const dispatch = useAppDispatch();
    const isFetchSucceeded = city.loading === "succeeded" && dailyForcast.loading === "succeeded" && weeklyForcast.loading === "succeeded";
    useEffect(() => {
      dispatch(fetchCurrentCityData())
      dispatch(fetchDailyForcast())
      dispatch(fetchWeeklyForcast())
    }, [citySubmitted])



    console.log(city)
    console.log(dailyForcast)
    console.log(weeklyForcast)

    return (
        <div className={classes.homeContainer}>
            <Search />
            {isFetchSucceeded ?
                <>
                    <MainItem dailyForcast={dailyForcast.dailyForcast} city={city.currentCity}/>
                    <WeeklyForcast weeklyForcast={weeklyForcast.dailyForcast}/>
                </>
                :
                <div>loading...</div>
            }
        </div>
    )
}

export default Home