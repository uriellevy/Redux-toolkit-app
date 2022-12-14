import React from 'react'
import classes from "./WeeklyForcast.module.scss"
import { fiveDaysDummyData } from "../../constants/ApiConsts"
import WeeklyForcastSlotItem from './WeeklyForcastSlotItem'



const WeeklyForcast = () => {
  return (
    <div className={classes.weeklyForcastContainer}>
      {fiveDaysDummyData.DailyForecasts.map((item, idx) => (
        <WeeklyForcastSlotItem key={idx} slotItem={item}/>
      ))}
    </div>
  )
}

export default WeeklyForcast