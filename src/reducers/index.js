import { combineReducers } from "redux";

import authReducer from './authReducer'
import PostReducer from "./postReducer";

export const reducers = combineReducers({authReducer, PostReducer})