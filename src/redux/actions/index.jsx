import {CHANGE_CITY} from '../constants'
 
export const changeCityName = (cityName)=>{
    return {
        type:CHANGE_CITY,
        cityName
    }
}