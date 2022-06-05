import { legacy_createStore as createStore } from "redux";
import { reducer } from "./reducer";


const initialState={
    Count:0,
};

export const store=createStore(reducer,initialState);