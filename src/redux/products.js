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
        test:123,
        name:'',
    },
    reducers:{
        addOneForTest:(state,action)=>{
            state.test=state.test+1;
        },
        changeName:(state,action)=>{
            state.name=action.payload;
        }
    }
})

export default products.reducer
export const {addOneForTest,changeName}=products.actions