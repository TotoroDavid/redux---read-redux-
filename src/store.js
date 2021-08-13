import { createStore, combineReducers } from "redux"
import homePage from './containers/Homepage/reducer'

const reducers = combineReducers({ homePage: homePage })

export default createStore(reducers)