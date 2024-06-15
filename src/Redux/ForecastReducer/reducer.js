import { FORECAST_DATA, LOADING, TOGGLE } from "../actionType"



const initialstate = {
    data:{},
    toggle:false,
    loading:false
}

export const reducer = (state=initialstate,{type,payload})=>{
    switch (type) {
        case FORECAST_DATA:
            return {...state,data:payload}
        case TOGGLE:
            return {...state,toggle:!state.toggle}
        case LOADING:
            return {...state,loading:payload}
        default:
            return {...state}
    }
}