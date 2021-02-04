import axios from '../utils/request'

const base = {
    baseUrl:"http://localhost:5566",
    homehot1:'/api/home/hot1',//主页热门1
    homehot2:'/api/home/hot2',//主页热门1
    cityUrl:"/api/aj/getcitycode",//城市列表
    // cityUrl:"https://bang.360.cn/aj/getcitycode",//城市列表
}

const api = {
    getHomeHot1(params){
        return axios.get(base.baseUrl+base.homehot1)
    },
    getHomeHot2(params){
        return axios.get(base.baseUrl+base.homehot2)
    },
    getCity(){
        return axios.get(base.cityUrl)
    }
}

export default api