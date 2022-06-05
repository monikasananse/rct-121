import React from "react";

import {useDispatch,useSelector} from "react-redux";
import { incrementCounter,decrementCounter } from "../store/action";

const Counter=()=>{
    const Count=useSelector((state)=>state.Count);
    console.log(Count)
  
    const dispatch=useDispatch();

    return (
        <>
        <h1>counter assignment</h1>
        <div>counter:{Count}</div>
        
        <div>
        <button onClick={()=>dispatch(incrementCounter())}>INCREMENT</button>
        <button onClick={()=>dispatch(decrementCounter())}>DECREMENT</button>
        </div>
        </>
    )
}
export default Counter;