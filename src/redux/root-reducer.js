import { combineReducers } from "@reduxjs/toolkit";

import contactReducer from "./contacts/contact-slice";
import filterReducer from "./filter/filter-slice"

import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";



const rootReducer = combineReducers({
    contacts: contactReducer,
    filter: filterReducer, 
})

const persistConfig = {
    key: "root",
    storage, 
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer;

