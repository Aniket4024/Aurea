import { FAV_DATA, FORECAST_DATA, LOADING, TOGGLE } from "../actionType"



const initialstate = {
    data:{},
    toggle:false,
    loading:false,
    favCities:[]
}

export const reducer = (state=initialstate,{type,payload})=>{
    switch (type) {
        case FORECAST_DATA:
            return {...state,data:payload}
        case TOGGLE:
            return {...state,toggle:!state.toggle}
        case LOADING:
            return {...state,loading:payload}
        case FAV_DATA:
            return {...state,favCities:payload}
        default:
            return {...state}
    }
}