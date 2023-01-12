import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios";

export const getAllPosts=createAsyncThunk(
    'posts/getAllPosts',
    async(_,{rejectWithValue})=>{
        try{
            const res=await axios ('https://jsonplaceholder.typicode.com/posts')
            
            if(res.status!==200){
                throw new Error('Server error!')
            }
            return res.data

        } catch(err){
            return rejectWithValue(err.message)
        }
        
    }
)

const posts=createSlice({
    name:"posts",
    initialState:{
        posts:[],
        status:'',
        test:1,
        error:''
    },
    reducers:{
        addOne:(state,action)=>{
            state.test=state.test+1;
        },
        
    },
    extraReducers:{
        //pending-ожидание
        [getAllPosts.pending]:(state,action)=>{
            state.status='loading'
        },
        //rejected-ошибка
        [getAllPosts.rejected]:(state,action)=>{
            state.status='error';
            state.error=action.payload
        },
        //fulfilled-отработало корректно
        [getAllPosts.fulfilled]:(state,action)=>{
            state.status='success'
            state.posts=action.payload
        }
    }
})

export default posts.reducer
export const {addOne}=posts.actions