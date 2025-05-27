import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { categories } from '../Category'
import Card from '../components/Card'
import { food_items } from './food'



function Home() {
  let[cate,setCate]=useState(food_items)

function filter(category){
  if (category ==="All"){
    setCate(food_items)
  } else {
    let newList=food_items.filter((item)=>( item.food-category === category));
    setCate(newList)
  }
}

  return (
    <div className='w-full min-h-screen bg-slate-200'>
      <Navbar/>
      <div className='flex  flex-wrap-reverse justify-center items-center gap-6 w-[100%]'>
        {categories.map((item) =>{
          return (<div  key={item.name}
            className='w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-gray-500 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200' onClick={() => filter(item.name)}>
            {item.Image}
            {item.name} 
            </div>)
        })}
      </div>
  <div className='w-full flex flex-wrap gap-5 justify-center items-center px-5 pt-8'>
    {cate.map((item)=>(
      <Card key={item.id} name ={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type}/>
    ))}
  </div>
    </div>
  )
}

export default Home

