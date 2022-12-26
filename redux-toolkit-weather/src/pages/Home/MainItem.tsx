import React from 'react'
import classes from "./MainItem.module.scss"
import {HomePageConsts} from "../../constants/WeatherConsts"
import UseBoolean from "../../hooks/UseBoolean"
import {dummy_data} from "../../constants/ApiConsts"
import {fahrenheitToCelciusConverter} from "../../utils/utilsFunctions"
import { City, DailyForcastData } from '../../types/WeatherTypes'

interface MainItemProps {
    dailyForcast: DailyForcastData | undefined
    city: City | undefined
}

const MainItem = ({dailyForcast, city}: MainItemProps) => {
    const {FAHRENHEIT_SIGN, CELSIUS_SIGN, GLOBAL_TEMP_SIGN} = HomePageConsts;
    const [isCelsius, {setFalse, setTrue}] = UseBoolean(true)
    const dayTemp = `Day: ${fahrenheitToCelciusConverter(isCelsius, dummy_data.DailyForecasts[0].Temperature.Maximum.Value)}${GLOBAL_TEMP_SIGN},`;
    const nightTemp = `Night:${fahrenheitToCelciusConverter(isCelsius, dummy_data.DailyForecasts[0].Temperature.Minimum.Value)}${GLOBAL_TEMP_SIGN},`;
    const dayDesc = dummy_data.DailyForecasts[0].Day.IconPhrase;
    const nightDesc = dummy_data.DailyForecasts[0].Night.IconPhrase;
    

    return (
        <div className={classes.mainItemContainer}>
            <div className={classes.topSection}>
                <div>Tel Aviv</div>
                <div>Friday, 22/12/2022</div>
                <div className={classes.tempSignsWrapper}>
                    <button className={isCelsius ? classes.active : ""} onClick={setTrue}>{CELSIUS_SIGN}</button>
                    <div className={classes.divider}/>
                    <button className={!isCelsius ? classes.active : ""} onClick={setFalse}>{FAHRENHEIT_SIGN}</button>
                </div>
            </div>
            <div className={classes.bottomSection}>
                <div className={classes.dayTempWrapper}>
                    <div className={classes.dayTemp} >{`${dayTemp}`}</div>
                    <div className={classes.description}>{dayDesc}</div>
                </div>
                <div className={classes.separator}/>
                <div className={classes.nightTempWrapper}>
                <div className={classes.nightTemp} >{nightTemp}</div>
                    <div className={classes.description}>{nightDesc}</div>
                </div>
            </div>
        </div>
    )
}

export default MainItem