import React from 'react'
import classes from "./Home.module.scss"
import {HomePageConsts} from "../../constants/WeatherConsts"
import MainItem from './MainItem';
import WeeklyForcast from './WeeklyForcast';

const Home = () => {
    return (
        <div className={classes.homeContainer}>
            <MainItem/>
            <WeeklyForcast/>
        </div>
    )
}

export default Home