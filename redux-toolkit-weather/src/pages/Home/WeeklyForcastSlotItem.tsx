import React from 'react'
import { GiNightSleep } from "react-icons/gi"
import { HiSun } from "react-icons/hi"
import {fahrenheitToCelciusConverter} from "../../utils/utilsFunctions"
import {HomePageConsts} from "../../constants/WeatherConsts"
import classes from "./WeeklyForcastSlotItem.module.scss"
import {DailyForcast} from "../../types/WeatherTypes"
import {weekDaysDictionary} from "../../constants/WeatherConsts"

interface WeeklyForcastSlotItemProps {
    slotItem: DailyForcast
}

const WeeklyForcastSlotItem = ({slotItem}:WeeklyForcastSlotItemProps) => {
    const {GLOBAL_TEMP_SIGN} = HomePageConsts;
    const day = weekDaysDictionary[new Date(slotItem.Date).getDay()].slice(0,3);

    return (
        <div className={classes.itemWrapper}>
            <div className={classes.weekDayName}>{day}</div>
            <div className={classes.tempWrapper}>
                <div className={classes.dayTemp}>
                    <HiSun />
                    <div className={classes.number}>{`${slotItem.Temperature.Maximum.Value}${GLOBAL_TEMP_SIGN}`}</div>
                </div>
                <div className={classes.nightTemp}>
                    <GiNightSleep />
                    <div className={classes.number}>{`${slotItem.Temperature.Minimum.Value}${GLOBAL_TEMP_SIGN}`}</div>
                </div>
            </div>
        </div>
    )
}

export default WeeklyForcastSlotItem