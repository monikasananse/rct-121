import React from 'react'
import styles from "./style.module.css";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className={styles.navbar}>

        <img style={{width:"150px",padding:"1rem"}}src="https://cdn.shopify.com/s/files/1/0044/9802/files/Tanner-Goods-Mazama-Logo_140x.png?v=1600190052"/>
        <Link to="/TannerGoods">Tanner Goods</Link>
        <Link to="/MazamaWares">Mazama Wares</Link>
        <Link to="/FeaturedCollections">Feartured Collections</Link>
        <Link to="/FinalSale">Final Sale</Link>
        <img style={{width:"30px"}} src="https://cdn-icons-png.flaticon.com/128/747/747376.png"/>

        <img style={{width:"50px"}}src="https://t3.ftcdn.net/jpg/03/25/73/68/240_F_325736897_lyouuiCkWI59SZAPGPLZ5OWQjw2Gw4qY.jpg"/>

        <img style={{width:"40px"}}src='https://cdn-icons.flaticon.com/png/128/2832/premium/2832495.png?token=exp=1654015749~hmac=9ee4d507bc086b96d54eea80eb92726d'/>
    </div>
  )
}

export default Navbar