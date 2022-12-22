import React, {useEffect} from 'react'
import classes from "./Home.module.scss"
import MainItem from './MainItem';
import WeeklyForcast from './WeeklyForcast';

import { useAppSelector, useAppDispatch } from '../../app/hooks'
import {  fetchCurrentCityData } from '../../features/SearchedCitySlice';
import { fetchDailyForcast } from '../../features/DailyForcastSlice';


const Home = () => {
    const city = useAppSelector(state => state.citySearch)
    const dailyForcast = useAppSelector(state => state.cityDailyForcast);
    const dispatch = useAppDispatch()
    useEffect(() => {
      dispatch(fetchCurrentCityData())
      dispatch(fetchDailyForcast())
    }, [])

    console.log(dailyForcast)
    

    return (
        <div className={classes.homeContainer}>
            <MainItem/>
            <WeeklyForcast/>
        </div>
    )
}

export default Home