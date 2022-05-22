import React from 'react';

function RestaurantDetails({
  imgURL,
  title,
  name,
  cost,
  rating
}) {
  return (
    <>
     
      <div style={{width:"40%",display:"flex",gap:"2rem",border:"1px solid black",margin:"0.5rem"}}>
        <div>
          <img style={{width:"90px",height:"90px"}}src={imgURL} alt={title}/>
        </div>
        <div>
          <p>{name}</p>
          <p>{title}</p>
          <p>cost {cost} for one</p>
          <p>{rating}</p>
        </div>
      </div>
    </>
    
  )
}

export default RestaurantDetails;