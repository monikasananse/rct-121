import React from 'react';
import styles from "./styles.module.css";
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';


const Footer=()=>{
    const{theme}=useContext(ThemeContext);
    return(
        <div className={theme==="light"?styles.footer:styles.footer2}>
            <p>This is the footer section</p>
        </div>
    )
}
export default Footer;