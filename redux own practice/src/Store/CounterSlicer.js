import { createSlice } from "@reduxjs/toolkit";

const intitalState = {
    count: 0, 
}

export const counterSlicer = createSlice({
    name:'counter',
    intitalState,
    reducers:{
        add:(state)=>{
            state.count +=1 ;
        },
        minus:(state)=>{
            state.count -=1;
        }
    }
})

export const {add,minus} = counterSlicer.actions;

export default counterSlicer.reducer;