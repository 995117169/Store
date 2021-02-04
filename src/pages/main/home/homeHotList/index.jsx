import React,{useState,useEffect} from 'react';
import api from '../../../../api'
import HotView from '../homeHotView';

const HotList = (props)=>{

    let [hot1,setHot1] = useState([]);
    let [hot2,setHot2] = useState([]);

    useEffect(()=>{
       api.getHomeHot1().then(res=>{
           if(res.data.status ===200){
               setHot1(res.data.data)
           }
       }) 
    },[])

    useEffect(()=>{
       api.getHomeHot2().then(res=>{
           if(res.data.status ===200){
               setHot2(res.data.data)
           }
       }) 
    },[])

    return (
        <div>
            {
                hot1.length>0?
                <HotView data={hot1} title='热门商品' city={props.city}/>:
                <>正在加载</>
            }
            {
                hot1.length>0?
                <HotView data={hot2} title='新品推荐' city={props.city}/>:
                <>正在加载</>
            }
        </div>
    )
}

export default HotList