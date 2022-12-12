import React from 'react'
import classes from "./Home.module.scss"
import {HomePageConsts} from "../../constants/HomePageConsts"
import MainItem from './MainItem';
import WeeklyForcast from './WeeklyForcast';

const Home = () => {
    const {HOME_PAGE_TITLE} = HomePageConsts;
    return (
        <div className={classes.homeContainer}>
            <h1>{HOME_PAGE_TITLE}</h1>
            <MainItem/>
            <WeeklyForcast/>
        </div>
    )
}

export default Home