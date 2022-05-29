import React, {useState,useEffect,useReducer} from 'react';
import axios from 'axios';
import styles from './styles.module.css';

const initState={
    loading:true,
    error:false,
    data:null
}
const gitHubActions={
    "fetch":'fetch',
    "success":'success',
    "failure":"failure"
}
const gitHubReducer=(state,action)=>{
    switch(action.type){
        case gitHubActions.fetch:{
            return ({
                ...state,
                loading:true,
                error:false,
                data:null

            })
        }
        case gitHubActions.success:{
            return({
                ...state,
                loading:false,
                error:false,
                data:action.payload
            })
        }
        case gitHubActions.failure:{
            return({
                ...state,
                loading:false,
                error:true

            })
        }
        default:
            return state;
    }
}
const Github=()=>{
    const[{loading,error,data},dispatch]=useReducer(gitHubReducer,initState);
    const[q,setQ]=useState(false);
    const[text,setText]=useState("masai");

    useEffect(()=>{
        dispatch({
            type:gitHubActions.fetch
        })
        axios({
            url:"https://api.github.com/search/users",
            method:"GET",
            params:{
                q:text
            }
        }).then(res=>{
            dispatch({
                type:gitHubActions.success,
                payload:res.data.items
            });
        })
        .catch((err)=>{
            dispatch({
                type:gitHubActions.failure
            })
        })
    },[q])
    console.log(data);

    return (
        <>
        <div>
            {loading && <div>...loading</div>}
            {error && <div>...error</div>}
            <h3>Github search</h3>
            <div>
            <input 
            onChange={(e)=>setText(e.target.value)}
            placeholder='enter name'/>

            <button onClick={()=>setQ(!q)}>search</button>
            </div>
            {
                data?.map((item)=>
                    
                    <div key={item.id}>
                        <div className={styles.git}>
                        
                        <div> <img height="50px"src={item.avatar_url}/></div>
                        <div>{item.login}</div>
                        <div>{item.html_url}</div>
                       
                        </div>
                        </div>
                )
            }
        </div>
        </>
    )
    
}
export default Github;