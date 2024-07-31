import { createSlice } from "@reduxjs/toolkit";




const initialState ={
    products: [],
    TotalItemsInCart: 0,
    ElementInCart:[],
}



const CartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart: (state)=>{
            state.TotalItemsInCart+=1;

        },
        Globalize:(state,action)=>{
            if(action==="update"){
                products=action;
            }
        }


    }
})

export const {addToCart} = CartSlice.actions;

export default CartSlice.reducer;