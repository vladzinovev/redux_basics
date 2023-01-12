import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios";

export const getAllPosts=createAsyncThunk(
    'posts/getAllPosts',
    async()=>{
        const res=await axios ('https://jsonplaceholder.typicode.com/posts')
        return res.data
    }
)

const posts=createSlice({
    name:"posts",
    initialState:{
        posts:[],
        loading:false,
        test:1
    },
    reducers:{
        addOne:(state,action)=>{
            state.test=state.test+1;
        },
        
    },
    extraReducers:{
        //pending-ожидание
        [getAllPosts.pending]:(state,action)=>{
            state.loading=true
        },
        //rejected-ошибка
        [getAllPosts.rejected]:(state,action)=>{
            state.loading=true
        },
        //fulfilled-отработало корректно
        [getAllPosts.fulfilled]:(state,action)=>{
            state.loading=false
        }
    }
})

export default posts.reducer
export const {addOne}=posts.actions