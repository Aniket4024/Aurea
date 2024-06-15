import axios from "axios"
import { FAV_DATA, FORECAST_DATA, LOADING, TOGGLE } from "../actionType"

export const settingData = (payload)=>(dispatch)=>{
    dispatch({type:FORECAST_DATA,payload:payload})
}

export const SideBarToggle = (payload)=>(dispatch)=>{
    dispatch({type:TOGGLE})
}

export const SetLoading = (payload)=>(dispatch)=>{
    dispatch({type:LOADING,payload:payload})
}

export const FavCityTrigger = (payload)=>(dispatch)=>{

    axios.get('http://localhost:8080/fav')
      .then((res)=>{
          dispatch({type:FAV_DATA,payload:[...res.data]})
          console.log(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })

}

