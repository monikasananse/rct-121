import React from "react";
import { Link } from "react-router-dom";

const Navbar=()=>{
    return(
        <>
        <div style={{display:'flex',gap:"20px",justifyContent:"center"}}>

       
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        </div>
        </>
    )

}
export default Navbar;