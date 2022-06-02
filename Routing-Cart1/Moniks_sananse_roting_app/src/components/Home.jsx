import React from 'react';
import styles from "./style.module.css";

let images=[
    
       "https://cdn.shopify.com/s/files/1/0044/9802/files/TG-Fathers-Day-22-Header-01_1728x.jpg?v=1653662775",
    
        "https://cdn.shopify.com/s/files/1/0044/9802/collections/tanner-goods-best-sellers-journeyman-natural-hero_1800x.jpg?v=1594360668"
   
]
let middle=[
    {
        "id":1,
        "imgURL":"https://cdn.shopify.com/s/files/1/0044/9802/products/Standard-Belt-Cognac-Front_360x.jpg?v=1648152491",
        "name":"Standard Belt-Cognac",
        "type":"TANNER GOODS",
        "price":"120.00"


    },
    {
        "id":2,
        "imgURL":"https://cdn.shopify.com/s/files/1/0044/9802/products/Standard-Belt-Cognac-Front_360x.jpg?v=1648152491",
        "name":"Standard Belt-Cognac",
        "type":"TANNER GOODS",
        "price":"120.00"
    },
    {
        "id":3,
        "imgURL":"https://cdn.shopify.com/s/files/1/0044/9802/products/Standard-Belt-Cognac-Front_360x.jpg?v=1648152491",
        "name":"Standard Belt-Cognac",
        "type":"TANNER GOODS",
        "price":"120.00"
    },
    {
        "id":4,
        "imgURL":"https://cdn.shopify.com/s/files/1/0044/9802/products/Standard-Belt-Cognac-Front_360x.jpg?v=1648152491",
        "name":"Standard Belt-Cognac",
        "type":"TANNER GOODS",
        "price":"120.00"
    },
    {
        "id":5,
        "imgURL":"https://cdn.shopify.com/s/files/1/0044/9802/products/Standard-Belt-Cognac-Front_360x.jpg?v=1648152491",
        "name":"Standard Belt-Cognac",
        "type":"TANNER GOODS",
        "price":"120.00"
    }
]

const Home=()=>{
    const [slide, setSlide] = React.useState(0);
    React.useEffect(() => {
     let interval = setInterval(() => {
        NextSlide();
        clearInterval(interval);
      }, 5000);
      return () => {
        clearInterval(interval);
      };
    }, [slide]);
  
    const ChangeSlideDots = (index) => {
      setSlide(index);
    };
    const NextSlide = () =>
      setSlide((prev) => (slide === images.length - 1 ? 0 : prev + 1));
  
    const PrevSlide = () =>
      setSlide((prev) => (slide === 0 ? images.length - 1 : prev - 1));

    return(
        <>
        
        <div className={styles.home}>
            <p>EXTRA 10% OFF FINAL SALE | USE CODE : LAST CALL</p>
        </div>
        <div className={styles.root}>
      <img className={styles.imageDiv} src={images[slide]} />
      {/* <button className={styles.buttons} onClick={PrevSlide}>
        ◁
      </button> */}
      <div className={styles.dotDiv}>
        {images.map((_, i) => (
          <div
            key={i}
            className={i === slide ? styles.redDot : styles.blackDot}
            onClick={() => ChangeSlideDots(i)}
        >
          </div>
        ))}
      </div>
      {/* <button className={styles.buttons} onClick={NextSlide}>
        ▷
      </button> */}
    </div>
    <div>
        <h1>Trending Right Now</h1>
        <div className={styles.middle}>
            {middle.map((item)=>{
                <div className={styles.five} key={item.id}>
                    <img src={item.imgURL}/>
                </div>
            })}

        </div>
    </div>
    <div>

    </div>



        </>
    )       
}
export default Home;