import React from 'react';
import styles from './styles.module.css';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Navbar=()=>{
    const{cart}=useContext(CartContext);
    const{theme}=useContext(ThemeContext);
    const{handleTheme}=useContext(ThemeContext);
    return (
        <div className={theme==="light"?styles.main:styles.main2}>
            <div>Home</div>
            <div>login</div>
            <div>Categories</div>
            <div>Cart:{cart}</div>
            <div>
                <button onClick={()=>handleTheme()} className={styles.but}>Theme</button>
            </div>
        </div>
    )
}
export default Navbar;