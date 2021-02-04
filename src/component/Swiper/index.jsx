import React,{useState} from 'react'
import './style.less'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from './Pagination/index';

const Swiper = (props) => {
    const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

    let [currentIndex,changeIndex] = useState(0);

    const handleChangeIndex = index => {
        changeIndex(index)
    };
    const arr = props.img
    return (
        <ul className='swiper'>
            <AutoPlaySwipeableViews index={currentIndex} onChangeIndex={handleChangeIndex}>
                {
                    arr.map((ele,index)=>{
                        return  <li className='swiper-view' key={index}><img src={ele} alt=""/></li>
                    })
                }
            </AutoPlaySwipeableViews>
            <Pagination len={arr.length} index={currentIndex}/>
        </ul >
    )
}

export default Swiper