import {createSlice} from "@reduxjs/toolkit"

const products=createSlice({
    name:"products",
    initialState:{
        products:[],
        filter:{
            price:{
                from:0,
                to:10000
            }
        },
        productsLength:0,
        test:123
    },
    reducers:{
        addOneForTest:(state,action)=>{
            state.test=state.test+1;
        },
        /*saveCart:(state,action)=>{
            state.cart=action.payload.arr;
        },
        saveDiscount:(state,action)=>{
            state.discount=action.payload.arr;
        }, */
    }
})

export default products.reducer
export const {addOneForTest}=products.actions