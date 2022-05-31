import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams} from 'react-router-dom';

const ProductsDetails=()=>{
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const params=useParams();

    useEffect(()=>{
        setLoading(true);
        const {id}=params;
        axios({
            url:`http://localhost:3000/products/${id}`,
            method:"GET",

        }).then((res)=>{
            setLoading(false);
            setData(res.data);
        }).catch((err)=>{
            setLoading(false);
        })
    },[params])
    //console.log(data.data);
    return(
        <>
        {loading && <div>...loading</div>}
        <div style={{paddign:"1rem"}}key={data.id}>
            <img src={data?.imgURL} alt="icon" width="200px"/>
            <div>Name:{data?.name}</div>
            <div>Brand:{data?.brand}</div>
            <div>Price: {data?.price}</div>
        </div>
        
        </>
    )
}
export default ProductsDetails;