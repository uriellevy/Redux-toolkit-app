import React from 'react'
import classes from "./Home.module.scss"
import {HomePageConsts} from "../../constants/HomePageConsts"
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