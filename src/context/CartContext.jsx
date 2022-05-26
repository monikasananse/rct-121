import { createContext,useState } from "react";

export const CartContext=createContext();

export const CartContextProvider=({children})=>{
    const[cart,setCart]=useState(1);
    
    const handleChange=(inc)=>{
        setCart(cart+inc);
    }
    return(
        <CartContext.Provider value={{cart,handleChange}}>
            {children}
        </CartContext.Provider>
    )
}

