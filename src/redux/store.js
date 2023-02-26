
// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./root-reducer";
// import contactReducer from "./contacts/contacts-reducer";
// import filterReducer from "./filter/filter-reducer";

import { persistStore } from 'redux-persist';
import rootReducer from "./root-reducer";


export const store = configureStore({
    reducer: rootReducer
})

export const persistor = persistStore(store);

