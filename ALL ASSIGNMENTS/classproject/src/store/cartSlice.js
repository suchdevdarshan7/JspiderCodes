import { createSlice } from "@reduxjs/toolkit";
import { products } from "../data/productsArray";

"use strict"
let initialState = {
    products: products,
    totalCartItems: 3,
    totalCartAmount: 450,
}

let cartSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        deleteProduct: (cstate, action) => {
            let { payload: deleteId } = action;

            let filteredProducts = cstate.products.filter(product => {
                return product.id !== deleteId;
            });

            cstate.products = filteredProducts;
            cartSlice.caseReducers.calculateTotalProducts(cstate);
            cartSlice.caseReducers.calculateTotalAmount(cstate);
        },
        addQty: (state, action) => {
            let product = state.products.find(product => product.id === action.payload);
            if (product) {
                product.qty += 1;
            }
            cartSlice.caseReducers.calculateTotalProducts(state);
            cartSlice.caseReducers.calculateTotalAmount(state);
        },
        removeQty: (cstate, action) => {
            cstate.products = cstate.products.map(product => {
                if (product.id === action.payload && product.qty > 0) {
                    return { ...product, qty: product.qty - 1 };
                }
                return product;
            });
            console.log(this)
            cartSlice.caseReducers.calculateTotalProducts(cstate);
            cartSlice.caseReducers.calculateTotalAmount(cstate);
        },
        calculateTotalProducts: (cstate) => {
            cstate.totalCartItems = cstate.products.reduce((total, product) => {
                return total + product.qty;
            }, 0);
        },
        calculateTotalAmount: (cstate) => {
            cstate.totalCartAmount = cstate.products.reduce((total, product) => {
                return total + (product.qty * product.price);
            }, 0);
        }
    }
})

export let { deleteProduct, addQty, removeQty, calculateTotalProducts, calculateTotalAmount } = cartSlice.actions;
export default cartSlice.reducer;
