import { combineReducers } from "@reduxjs/toolkit";

import contactReducer from "./contacts/contact-slice";
import filterReducer from "./filter/filter-slice"
// import { persistReducer } from "redux-persist";
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

// const initialState = {
//     contacts: [],
//     filter: ""
// }

// const reducer = (state = initialState, { type, payload }) => {
//     switch (type) {
//         case ADD_CONTACT:
//             const newContacts = [...state.contact, payload];
//             return { ...state, contacts: newContacts };
//         case DELETE_CONTACT:
//             const result = state.contact.filter(item => item.id !== payload);
//             return { ...state, contacts: result }
//         case SET_FILTER:
//             return { ...state, filter: payload }
//         default:
//             return state;
//     }
// }

// export default reducer;