import React from 'react';
import {useSelector} from 'react-redux'

const CurrentCity = ()=>{
    const city = useSelector(state=>state.city)
    return (
        <div>
            目前所在城市:{city}
        </div>
    )
}

export default CurrentCity