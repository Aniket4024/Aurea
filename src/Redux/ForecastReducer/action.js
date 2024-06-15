import { FORECAST_DATA, LOADING, TOGGLE } from "../actionType"

export const settingData = (payload)=>(dispatch)=>{
    dispatch({type:FORECAST_DATA,payload:payload})
}

export const SideBarToggle = (payload)=>(dispatch)=>{
    dispatch({type:TOGGLE})
}

export const SetLoading = (payload)=>(dispatch)=>{
    dispatch({type:LOADING,payload:payload})
}

