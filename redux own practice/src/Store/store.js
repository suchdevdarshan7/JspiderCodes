import { configureStore } from "@reduxjs/toolkit";
import CounterSlicer from "./CounterSlicer";

export const store = configureStore({
    reducer:{
        counter: CounterSlicer,
    },
})