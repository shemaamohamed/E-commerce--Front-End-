import { createSlice } from "@reduxjs/toolkit";

const itemSlice= createSlice({
    name:'items',
    initialState:[],
    reducers:{
        addItem(state,action){
            state.push(action.payload)
        },
        removeItem(state,action){
            return state.filter(item=>item.id!==action.payload)
        }
    }
})

export const{addItem,removeItem}=itemSlice.actions
export default itemSlice.reducer;