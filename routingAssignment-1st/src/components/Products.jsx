import React, { useEffect,useState } from "react";
import axios from 'axios';
import {Link} from "react-router-dom";

const Products=()=>{
    const[data,setData]=useState([]);
    const[loading,setLoading]=useState(true);

    useEffect(()=>{
        setLoading(true);
        axios({
            url:"http://localhost:3000/products",
            method:"GET"

        })
        .then((res)=>{
           setLoading(false);
           setData(res.data)
        })
        .catch((err)=>{
            setLoading(false);
        })
    },[])
    //console.log(data);
    return(
       <>
        {loading && <div>...loading</div>}
        <div >
            {data?.map((item)=>(
                <div style={{display:"flex",gap:"20px",justifyContent:"center",border:"1px solid black",padding:"1rem"}}key={item.id}>
                <div>brand: {item.brand}</div>
                <div>name: {item.name}</div>
                <Link to={`/Products/${item.id}`}>see more</Link>
            </div>
                
            ))}

       
        </div>
        </>
       
    )
}
export default Products;