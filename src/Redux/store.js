import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from 'redux-thunk';
import { reducer as ForecastReducer } from "./ForecastReducer/reducer";


const rootReducer = combineReducers({
    ForecastReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))