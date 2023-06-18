import {configureStore} from '@reduxjs/toolkit'
import agencesReducer from "./reducers/agencesReducer";
import voituresReducer from "./reducers/voituresReducer";

export type AppDispatch = typeof store.dispatch;

// Reference here all your application reducers
const reducer = {
    agencesReducer : agencesReducer,
    voituresReducer : voituresReducer
}

// @ts-ignore
const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
},);

export default store;