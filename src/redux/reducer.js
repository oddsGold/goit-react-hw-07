import { combineReducers } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice.js";
import filtersReducer from "./filtersSlice.js";


const rootReducer = combineReducers({
    contacts: contactsReducer,
    filters: filtersReducer
});

export default rootReducer;