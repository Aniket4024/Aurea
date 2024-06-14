import { FORECAST_DATA } from "../actionType"

export const settingData = (payload)=>(dispatch)=>{
    dispatch({type:FORECAST_DATA,payload:payload})
}