import { INCREMENT,DECREMENT } from "./actionTypes";

export const reducer=(state,action)=>{
    switch(action.type){
        case INCREMENT:{
            return{
            ...state,
            Count:state.Count+1,
        }
    
    } 
    case DECREMENT:{
        return{
            ...state,
            Count:state.Count-1,
        }
    }
    default:{
        return state
    }
    }
}