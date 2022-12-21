import React, {useEffect} from 'react'
import classes from "./Home.module.scss"
import {HomePageConsts} from "../../constants/WeatherConsts"
import MainItem from './MainItem';
import WeeklyForcast from './WeeklyForcast';

import { useAppSelector, useAppDispatch } from '../../app/hooks'
import {  fetchCurrentCityData } from '../../features/SearchedCitySlice';


const Home = () => {
    const city = useAppSelector(state => state.citySearch)
    const dispatch = useAppDispatch()
    useEffect(() => {
      dispatch(fetchCurrentCityData())
    }, [])

    console.log(city)
    

    return (
        <div className={classes.homeContainer}>
            <MainItem/>
            <WeeklyForcast/>
        </div>
    )
}

export default Home