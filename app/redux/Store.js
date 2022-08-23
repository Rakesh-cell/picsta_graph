import { applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { configureStore } from '@reduxjs/toolkit'

const logger = createLogger({
    //options...
});

const rootReducer=combineReducers({
    user:userReducer, //sample reducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk, logger],
    devTools: process.env.NODE_ENV !== 'production',

  })

export default store;