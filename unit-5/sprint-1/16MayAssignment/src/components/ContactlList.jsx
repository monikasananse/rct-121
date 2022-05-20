import React,{useState}from 'react'
import ContanctCard from './ContanctCard';

const initData=[
    {
        id:1,
        imgURL:"https://ca.slack-edge.com/T02QFJUB5DF-U02RCS9NAVA-062887fe8e87-512",
        name:"Monika Sananse",
        email:"monikasnns@gmail.com",
        phone:"9575653216",
    },
    {
        id:2,
        imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy1xzGXqEZ6Zj4Ofc_DYCEYwiCdmiHL4g4fw&usqp=CAU",
        name:"Vinaya sharma",
        email:"vinayammms@gmail.com",
        phone:"9575653216",
    },
    {
        id:3,
        imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWgCXM0EK7fLhn3NDAKddydefQBh9T91SuGw&usqp=CAU",
        name:"Saloni Dhupia",
        email:"salonidupia@gmail.com",
        phone:"9575653216",
    },
    {
        id:4,
        imgURL:"https://ca.slack-edge.com/T02QFJUB5DF-U02RCS9NAVA-062887fe8e87-512",
        name:"Rakhi Niyam",
        email:"rakhiniyamat@gmail.com",
        phone:"9575653216",
    },
    {
        id:5,
        imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWgCXM0EK7fLhn3NDAKddydefQBh9T91SuGw&usqp=CAU",
        name:"Shreyashi shukla",
        email:"shreyasnshishukla@gmail.com",
        phone:"9575653216",
    }


]
function ContactlList() {
    const[data,setData]=useState(initData);
  return (
    <div>
        {
            data.map((item)=>
            <ContanctCard key={item.id} name={item.name} email={item.email} img={item.imgURL} phone={item.phone}/>
            )
        
        }
    </div>
  )
}

export default ContactlList
