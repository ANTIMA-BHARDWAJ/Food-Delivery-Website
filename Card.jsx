import React from 'react'
import image1 from "../assets/image1.jpg" 
import { GiChickenOven } from "react-icons/gi";
import { LuLeafyGreen } from "react-icons/lu";

function Card({name,image,id,price,type}) {
  return (
    <>
    <div className='w-[300px] h-[350px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg'>
      <div className='w-[100%] h-[60%] overflow-hidden rounded-lg' >
        <img src={image} alt="" className='object-cover'/>
      </div>
      <div className='text-2xl font-semibold '>
{name}
      </div>
      <div className='w-full flex justify-between  items-center'>
<div className='text-lg font-bold text-green-400'>Rs {price}/-</div>
<div className='flex justify-center items-center gap-2 text-green-400 text-lg font-semibold '>{type==="veg"?<LuLeafyGreen />:<GiChickenOven />} </div> <span> {type}</span></div>
<button className='w-full p-3 rounded-lg bg-green-300 text-gray-700 hover:bg-green-500 transition-all'>Add to dish</button>
    </div> 
 
</>
  )
}

export default Card;
