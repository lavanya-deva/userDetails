import React from "react";
import { createStore } from 'redux';
import userReducer from "./reducers/UserReducer";
import { combineReducers } from 'redux';


    const red= combineReducers({
        user: userReducer
       
    });

    const store=createStore(red);


export default store;

