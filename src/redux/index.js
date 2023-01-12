import {configureStore} from "@reduxjs/toolkit"
import products from './user'

const store = configureStore({
    reducer:{
        products
    },
    /* middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck:false,
        }), */
})
export default store