import React from 'react'
import classes from "./MainItem.module.scss"
import {HomePageConsts} from "../../constants/HomePageConsts"

const MainItem = () => {
    const {FAHRENHEIT_SIGN, CELSIUS_SIGN} = HomePageConsts;
    return (
        <div className={classes.mainItemContainer}>
            <div className={classes.topSection}>
                <div>Tel Aviv</div>
                <div>Friday, 22/12/2022</div>
                <div className={classes.tempSignsWrapper}>
                    <button className={classes.celsiusBtn}>{CELSIUS_SIGN}</button>
                    <div className={classes.divider}/>
                    <button className={classes.fahrenheitBtn}>{FAHRENHEIT_SIGN}</button>
                </div>
            </div>
            <div className={classes.bottomSection}>
                <div className={classes.dayTemp}>
                    23, cloudy weather

                </div>
                <div className={classes.separator}>separator</div>
                <div className={classes.dayTemp}>
                    23, cloudy weather
                </div>
            </div>
        </div>
    )
}

export default MainItem