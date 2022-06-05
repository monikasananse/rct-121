import { INCREMENT,DECREMENT } from "./actionTypes";


export const incrementCounter=()=>({
    type:INCREMENT,
});

export const decrementCounter=()=>({
    type:DECREMENT,
});