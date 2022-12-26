import classes from "./WeeklyForcast.module.scss"
import { fiveDaysDummyData } from "../../constants/ApiConsts"
import WeeklyForcastSlotItem from './WeeklyForcastSlotItem'
import { WeeklyForcastData } from '../../types/WeatherTypes'

interface WeeklyForcast {
  weeklyForcast: WeeklyForcastData | undefined
}

const WeeklyForcast = ({weeklyForcast}: WeeklyForcast) => {
  
  return (
    <div className={classes.weeklyForcastContainer}>
      {weeklyForcast?.DailyForecasts.map((item, idx) => (
        <WeeklyForcastSlotItem key={idx} slotItem={item}/>
      ))}
    </div>
  )
}

export default WeeklyForcast