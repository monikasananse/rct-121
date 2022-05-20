import React,{useState} from 'react';
import styles from "./Card.module.css";

function ContanctCard(props) {
    const{img,name,email,phone,id}=props;
    const[isActive,setIsActive]=useState(false);

    
    
  return (
        <div className={styles.flex}>
            <div className={styles.img}>
                <div ><img className={styles.setting} src={img} alt="monika"/></div>
            </div>
            <div  onClick={()=>setIsActive(!isActive)}className={styles.text}>
                {name}
                <br/>
                {email}
                {isActive?<div>{phone}</div>:""}
                
            </div>
        </div>
    
  )
  
}

export default ContanctCard;