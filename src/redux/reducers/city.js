import {CHANGE_CITY} from '../constants'

const defaultCity = '北京'

const city = (state=defaultCity,action)=>{
    switch (action.type) {
        case CHANGE_CITY:
            return action.cityName
        default:
            return state;
    }
}
export default city