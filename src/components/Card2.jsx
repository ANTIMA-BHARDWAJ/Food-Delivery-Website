import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { AddItem, RemoveItem, DecreaseItem } from '../redux/cartSlice';

function Card2({ name, id, price, image, qty }) {
  const dispatch = useDispatch();

  return (
    <div className='w-full h-[120px] shadow-lg p-2 flex justify-between'>
      <div className='w-[60%] h-full flex gap-5'>
        <div className='w-[120px] h-[120px] overflow-hidden rounded-lg'>
          <img
            src={image || "/images/placeholder.jpg"}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className='w-[40%] h-full flex flex-col gap-3 items-center'>
          <div className='text-lg text-gray-600 font-semibold'>{name}</div>
          <div className='w-[100px] h-[50px] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg font-semibold border-2 border-green-500 text-xl'>
            <button
              className='w-[60%] h-full bg-white flex justify-center items-center'
              onClick={() => dispatch(AddItem({ id, name, price, image }))} // ✅ FIXED
            > + </button>
            <span className='w-[40%] h-full bg-slate-300 flex justify-center items-center'>{qty}</span>
            <button
              className='w-[60%] h-full bg-white flex justify-center items-center'
              onClick={() => dispatch(DecreaseItem({ id }))}
            > - </button>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-start items-end gap-6'>
        <span className='text-xl text-green-400 font-semibold'>Rs:{price * qty}</span>
        <RiDeleteBin6Line
          className='w-[30px] h-[30px] text-red-400 cursor-pointer'
          onClick={() => dispatch(RemoveItem({ id }))}
        />
      </div>
    </div>
  );
}

export default Card2;
