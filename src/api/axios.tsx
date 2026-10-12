import axios from "axios"
import { getFromLocalStorage, removeFromLocalStorage } from "../utils/common"
import { Navigate } from "react-router"

const BASE_URL=import.meta.env.VITE_API_URL

const publicApi= axios.create({
    baseURL:BASE_URL,
    timeout:5000,
    headers:{
        'Content-Type': 'application/json',
    }
})
const privateApi= axios.create({
    baseURL:BASE_URL,
    timeout:5000,
    headers:{
        'Content-Type': 'application/json',
    }
})

// let isRefreshing=false
// const failedQueue=[]

privateApi.interceptors.request.use(function(config){
        const token = getFromLocalStorage('token')

        if(!token) {
            return Promise.reject(new Error('Unauthorized. No token found.'));
        }else{
            config.headers.Authorization = `Bearer ${JSON.parse(token)}`
        }
        return config
    },function(error){
        return Promise.reject(error)
    }
)

privateApi.interceptors.response.use(function(response) {
        return response
    },
     async (error) => {
        if(error?.response?.data?.errorCode==='TOKEN_EXPIRED'){
            removeFromLocalStorage('token')
            Navigate({to:'/account/login'})
        }
        return Promise.reject(error);
    })

publicApi.interceptors.response.use((response)=>{
        return response
    }, function onRejected(error){
        error.message = error?.response?.data?.message
        return Promise.reject(error)
    })

export {publicApi,privateApi}