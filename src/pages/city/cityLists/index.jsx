import React,{useEffect,useState} from 'react'
import CitySelect from 'react-city-select';
import api from '../../../api'
import {useDispatch} from 'react-redux'
import {changeCityName} from '../../../redux/actions'


const CityLits = (props)=>{
    // console.log(props);

    const [data,setData] = useState();
    const dispatch = useDispatch();

    useEffect(()=>{
        api.getCity().then(res=>{
            if(res.status === 200){
                setData(res.data.result.citylist)
            }
        })
    },[])

    function handleSelectCity(cityData) {
        dispatch(changeCityName(cityData.name))
        window.history.back()
      }

    return (
        <CitySelect
        传入数据
        data={data}
        // 传入回调
        onSelectItem={handleSelectCity}
        >
      </CitySelect>
    )
}
export default CityLits