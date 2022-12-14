import React from 'react'
import { GiNightSleep } from "react-icons/gi"
import { HiSun } from "react-icons/hi"
import {fahrenheitToCelciusConverter} from "../../utils/utilsFunctions"
import {HomePageConsts} from "../../constants/WeatherConsts"
import classes from "./WeeklyForcastSlotItem.module.scss"

interface WeeklyForcastSlotItemProps {
    slotItem: any
}

const WeeklyForcastSlotItem = (props:WeeklyForcastSlotItemProps) => {
    const {GLOBAL_TEMP_SIGN} = HomePageConsts
    return (
        <div className={classes.itemWrapper}>
            <div className={classes.weekDayName}>Fri</div>
            <div className={classes.tempWrapper}>
                <div className={classes.dayTemp}>
                    <HiSun />
                    <div className={classes.number}>{`${props.slotItem.Temperature.Maximum.Value}${GLOBAL_TEMP_SIGN}`}</div>
                </div>
                <div className={classes.nightTemp}>
                    <GiNightSleep />
                    <div className={classes.number}>{`${props.slotItem.Temperature.Minimum.Value}${GLOBAL_TEMP_SIGN}`}</div>
                </div>
            </div>
        </div>
    )
}

export default WeeklyForcastSlotItem