import * as types from './actionTypes';
import axios from 'axios';

const fetchDataRequest=(payload)=>{
    return{
        type:types.FETCH_DATA_REQUEST,
        payload
    }
}

const fetchDataSuccess=(payload)=>{
    return{
        type:types.FETCH_DATA_SUCCESS,
        payload
    }
}

const fetchDataFailure=(payload)=>{
    return{
        type:types.FETCH_DATA_FAILURE,
        payload
    }
}

const fetchData=(payload)=>{
    return (dispatch)=>{
        dispatch(fetchDataRequest());
        axios.get("/products",{
            params:{
                ...payload
            }
        })
        .then((r)=>dispatch(fetchDataSuccess(r.data)))
        .catch((e)=>dispatch(fetchDataFailure(e.data)));
    };
};

export {fetchData};