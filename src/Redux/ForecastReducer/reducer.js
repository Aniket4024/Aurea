import { FORECAST_DATA } from "../actionType"



const initialstate = {
    data:{}
}

export const reducer = (state=initialstate,{type,payload})=>{
    switch (type) {
        case FORECAST_DATA:
            return {...state,data:payload}
        default:
            return {...state}
    }
}