/**
 * Navbar Component
 * 
 * The navigation bar for the Food Delivery Website containing:
 * - Brand logo with food icon
 * - Search functionality
 * - Shopping cart with item counter
 * 
 * Features:
 * - Responsive design
 * - Search input with icon
 * - Cart icon with dynamic counter
 * - Hover effects and smooth transitions
 * 
 * @author Antima Bhardawaj
 * @version 1.0.0
 */

import React, { useContext,useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaShopify } from "react-icons/fa";
import { dataContext } from '../context/userContext';
import { food_items } from '../Pages/food';
import { useSelector } from 'react-redux';


function Navbar() {
  let { input, setInput, cate, setCate, showCart, setShowCart } = useContext(dataContext);


  useEffect(() => { 
    let newlist= food_items.filter((item)=> item.food_name.toLowerCase().includes(input.toLowerCase()));
    setCate(newlist)
  },[input,setCate])

  let items = useSelector(state => state.cart);
  console.log(items)
  return (
    <div className='w-full h-[100px] bg-slate-200 flex justify-between items-center px-8'>
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
      <MdFastfood  className='w-[60px] h-[30px] text-green-500'/>
      </div>
      <form  className='w-[45%] h-[60%] bg-white flex items-center px-5 gap-5 rounded-md shadow-md md:w-[70%]'>
      <IoSearch  className='text-green-500 w-[20px] h-[20px]' />
      <input type="text" placeholder='search here...' 
      className='w-[100%] outline-none text-[16px] md:text-[20px]'
      onChange={(e)=>setInput (e.target.value)} value={input}/>
      </form>
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative cursor-pointer' onClick={() => setShowCart(true)}
>
        <span className='absolute top-0 right-2 text-green-500 font-bold text-[18px]'>{items.length}</span>
      <FaShopify className='w-[30px] h-[30px] text-green-500' />
      </div>
    </div>
  )
}

export default Navbar
