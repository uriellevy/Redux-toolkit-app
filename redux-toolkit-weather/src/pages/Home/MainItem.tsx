import React from 'react'
import classes from "./MainItem.module.scss"
import {HomePageConsts} from "../../constants/WeatherConsts"
import UseBoolean from "../../hooks/UseBoolean"
import {dummy_data} from "../../constants/ApiConsts"

const MainItem = () => {
    const {FAHRENHEIT_SIGN, CELSIUS_SIGN} = HomePageConsts;
    const [isCelsius, {setFalse, setTrue}] = UseBoolean(true)

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
                    <div className={classes.dayTemp} >{dummy_data.DailyForecasts[0].Temperature.Maximum.Value}</div>
                    <div className={classes.description}>{dummy_data.DailyForecasts[0].Day.IconPhrase}</div>
                </div>
                <div className={classes.separator}>separator</div>
                <div className={classes.nightTempWrapper}>
                <div className={classes.nightTemp} >{dummy_data.DailyForecasts[0].Temperature.Minimum.Value}</div>
                    <div className={classes.description}>{dummy_data.DailyForecasts[0].Night.IconPhrase}</div>
                </div>
            </div>
        </div>
    )
}

export default MainItem