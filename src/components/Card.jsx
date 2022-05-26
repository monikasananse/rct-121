import React from "react";
import styles from "./styles.module.css";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const Card=()=>{
    const{handleChange}=useContext(CartContext);
    return(
        <>
        <div>
            <button onClick={()=>{handleChange(1)}}className={styles.add}>add to cart</button>
        </div>
        </>
    )
}
export default Card;