import React from 'react'
import image1 from "../assets/image1.jpg" 
import { GiChickenOven } from "react-icons/gi";
import { LuLeafyGreen } from "react-icons/lu";
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cartSlice';

function Card({ name, image, id, price, type }) {
  let dispatch = useDispatch();
  
  return (
    <div className='w-[300px] h-[350px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg'>
      <div className='w-[100%] h-[60%] overflow-hidden rounded-lg'>
        <img src={image} alt={name} className='object-cover w-full h-full'/>
      </div>
      <div className='text-2xl font-semibold'>{name}</div>
      <div className='w-full flex justify-between items-center'>
        <div className='text-lg font-bold text-green-400'>Rs {price}/-</div>
        <div className='flex items-center gap-2 text-green-400 text-lg font-semibold'>
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />} 
          <span>{type}</span>
        </div>
      </div>
      <button
        className='w-full p-3 rounded-lg bg-green-300 text-gray-700 hover:bg-green-500 transition-all'
        onClick={() => dispatch(AddItem({  food_name: name,  food_image: image,  price,  id,  food_type: type }))}
      >
        Add to dish
      </button>
    </div>
  );
}

export default Card;
