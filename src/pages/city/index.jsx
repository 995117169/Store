import React from 'react';
import CityNav from '../../component/ItemNav'
import CurrentCity from './currentCity'
import CityList from './cityList'
import CityLits from './cityLists'

import {useState} from 'react'
import {useDispatch} from "react-redux"
import {changeCityName} from '../../redux/actions'

const City = ()=>{

    const [city,ChangeCity] = useState('北京');
    const dispatch = useDispatch();

    function click(city){
        dispatch(changeCityName(city))
        ChangeCity(city);
    }

    return (
        <div>
            <CityNav title='热门城市'/>
            <CurrentCity city={city}/>
            <CityList click={click}/>
            <CityLits/>
        </div>
    )
}

export default City