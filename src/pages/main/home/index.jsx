import React from 'react';
import TapNav from '../../../component/TapNav/index'
import Swiper from '../../../component/Swiper/index'
import Banner1 from '../../../assets/images/banner1.png'
import Banner2 from '../../../assets/images/banner2.png'
import Banner3 from '../../../assets/images/banner3.png'
import HomeHotList from './homeHotList'
import {useSelector} from 'react-redux'


const Home = ()=>{
    const arr = [Banner1,Banner2,Banner3];
    const cityName = useSelector(state=>state.city)
    return (
        <div>
            <TapNav text={cityName}/>
            <Swiper img={arr}/>
            <HomeHotList city={cityName}/>
        </div>
    )
}

export default Home