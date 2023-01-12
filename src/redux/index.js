import {configureStore} from "@reduxjs/toolkit"
import products from './products'
import posts from './posts'

const store = configureStore({
    reducer:{
        products,
        posts
    },
    /* middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck:false,
        }), */
})
export default store