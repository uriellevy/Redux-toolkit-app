import React, {useEffect} from 'react'
import classes from "./Home.module.scss"
import {HomePageConsts} from "../../constants/WeatherConsts"
import MainItem from './MainItem';
import WeeklyForcast from './WeeklyForcast';

import { useSelector, useDispatch } from 'react-redux';
import { fetchCurrentCityData } from '../../features/SearchedCitySlice';


const Home = () => {
    const dispatch = useDispatch();
    const data = useSelector(data => data)

    

    return (
        <div className={classes.homeContainer}>
            <MainItem/>
            <WeeklyForcast/>
        </div>
    )
}

export default Home