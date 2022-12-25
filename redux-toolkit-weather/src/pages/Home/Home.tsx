import React, { useEffect, useState } from 'react';
import classes from "./Home.module.scss";
import MainItem from './MainItem';
import WeeklyForcast from './WeeklyForcast';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchCurrentCityData } from '../../features/SearchedCitySlice';
import { fetchDailyForcast } from '../../features/DailyForcastSlice';
import { fetchWeeklyForcast } from '../../features/weeklyForcastSlice';
import {HomePageConsts} from "../../constants/WeatherConsts"
import {submittedCity} from "../../features/SearchedCitySlice";



const Home = () => {
    const city = useAppSelector(state => state.citySearch);
    const dailyForcast = useAppSelector(state => state.cityDailyForcast);
    const weeklyForcast = useAppSelector(state => state.cityWeeklyForcast);
    const citySubmitted = useAppSelector(state => state.citySearch.city)
    const dispatch = useAppDispatch();
    const [cityInput, setCityInput] = useState("");
    const {SEARCH} = HomePageConsts;
    // useEffect(() => {
    //   dispatch(fetchCurrentCityData())
    //   dispatch(fetchDailyForcast())
    //   dispatch(fetchWeeklyForcast())
    // }, [])

    const onCityChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCityInput(e.target.value)
        // console.log(cityInput)
    }

    const onSearchHandler = (inputText: string) => {
        if(inputText !== "") dispatch(submittedCity(inputText))
    }

    console.log(citySubmitted)


    return (
        <div className={classes.homeContainer}>
            <div className={classes.cityForm}>
                <div className={classes.searchInput}>
                    <input className={classes.input} type="text" placeholder='Enter City...' onChange={onCityChangeHandler} />
                </div>
                <button onClick={() => onSearchHandler(cityInput)}>{SEARCH}</button>
            </div>
            <MainItem />
            <WeeklyForcast />
        </div>
    )
}

export default Home