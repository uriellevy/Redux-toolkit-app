import React, { useState } from 'react'
import { useAppDispatch } from '../../app/hooks';
import { submittedCity } from '../../features/SearchedCitySlice';
import classes from "./Search.module.scss";
import {HomePageConsts} from "../../constants/WeatherConsts"


const Search = () => {
    const dispatch = useAppDispatch();
    const [cityInput, setCityInput] = useState("");
    const {SEARCH} = HomePageConsts;

    const onCityChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCityInput(e.target.value)
    };

    const onSearcClickhHandler = (inputText: string) => {
        if(inputText !== "") dispatch(submittedCity(inputText))
    };

    return (
        <div className={classes.cityForm}>
            <div className={classes.searchInput}>
                <input className={classes.input} type="text" placeholder='Enter City...' onChange={onCityChangeHandler} />
            </div>
            <button onClick={() => onSearcClickhHandler(cityInput)}>{SEARCH}</button>
        </div>
    )
}

export default Search