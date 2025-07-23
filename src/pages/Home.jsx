/**
 * Home Page Component
 * 
 * This is the main page of the Food Delivery Website that displays:
 * - Navigation bar
 * - Food category filters
 * - Food items grid with filtering functionality
 * 
 * Features:
 * - Filter food items by category (All, Veg, Non-veg)
 * - Responsive design with Tailwind CSS
 * - Dynamic food item rendering
 * 
 * @author Antima Bhardawaj
 * @version 1.0.0
 */

import React, { useContext, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { categories } from '../Category';
import Card from '../components/Card';
import { food_items } from './food';
import { dataContext } from '../context/userContext';
import { ImCross } from "react-icons/im";
import Card2 from '../components/Card2';
import { useSelector, useDispatch } from 'react-redux';
import { AddItem } from '../redux/cartSlice';

function Home() {
  const { cate, setCate, input, showCart, setShowCart } = useContext(dataContext);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const dispatch = useDispatch(); 

  // Load all items initially
  useEffect(() => {
    setCate(food_items);
  }, []);

  //  Filter dishes by category
   const filterByCategory = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setCate(food_items);
    } else {
      const filtered = food_items.filter(
        (item) => item.food_category.toLowerCase() === category.toLowerCase()
      );
      setCate(filtered);
    }
  };


  // Redux cart values
  const items = useSelector(state => state.cart);

  const subtotal = items.reduce((total, item) => total + item.price * item.qty, 0);
  const deliveryFee = 20;
  const taxes = subtotal * 0.5 / 100;
  const total = Math.floor(subtotal + deliveryFee + taxes);

  return (
    <div className='w-full min-h-screen bg-slate-200'>
      <Navbar />

      {!input && (
        <div className='flex flex-wrap-reverse justify-center items-center gap-6 w-full'>
         {categories.map((item) => (
  <div
    key={item.id}
    onClick={() => filterByCategory(item.name)} 
    className={`w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-gray-500 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200 ${selectedCategory === item.name ? 'bg-green-100' : ''}`}
            >
    {item.Image}
    <span>{item.name}</span>
  </div>
))}

        </div>
      )}

      {/* Filtered Food Cards */}
      <div className='w-full flex flex-wrap gap-5 justify-center items-center px-5 pt-8'>
        {cate.map(item => (
          <Card
            key={item.id}
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            id={item.id}
            type={item.food_type}
            // 🔧 Pass AddItem directly here (Optional Alternative)
            onAdd={() => dispatch(AddItem(item))} // Full item sent to Redux
          />
        ))}
      </div>

      {/* Cart Sidebar */}
      <div className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 flex flex-col items-center overflow-auto ${showCart ? "translate-x-0" : "translate-x-full"}`}>
        <header className='w-[100%] flex justify-between items-center'>
          <span className='text-green-400 text-[18px] font-semibold'>Order items</span>
          <ImCross
            className='text-green-400 text-[18px] font-semibold cursor-pointer hover:text-gray-500'
            onClick={() => setShowCart(false)}
          />
        </header>

        {items.length > 0 ? (
          <>
            <div className='w-full mt-8 flex flex-col gap-5 items-center'>
              {items.map(item => (
                <Card2
                  key={item.id}
                  name={item.food_name}
                  price={item.price}
                  image={item.food_image}
                  id={item.id}
                  qty={item.qty}
                />
              ))}
            </div>

            <div className='w-full border-t-2 border-gray-500 mt-7'>
              <div className='w-full flex justify-between items-center'>
                <span className='text-gray-400 text-lg font-semibold'>Subtotal</span>
                <span className='text-green-400 font-semibold text-lg'>Rs{subtotal}/-</span>
              </div>
              <div className='w-full flex justify-between items-center'>
                <span className='text-gray-400 text-lg font-semibold'>DeliveryFee</span>
                <span className='text-green-400 font-semibold text-lg'>Rs{deliveryFee}/-</span>
              </div>
              <div className='w-full flex justify-between items-center'>
                <span className='text-gray-400 text-lg font-semibold'>Taxes</span>
                <span className='text-green-400 font-semibold text-lg'>Rs{taxes}/-</span>
              </div>
              <div className='w-full flex justify-between items-center border-t-2 border-gray-500 p-5'>
                <span className='text-gray-400 text-2xl font-semibold'>Total</span>
                <span className='text-green-400 font-semibold text-2xl'>Rs{total}/-</span>
              </div>
              <button className='w-[80%] p-3 rounded-lg bg-green-300 text-gray-700 hover:bg-green-500 transition-all'>
                Place Order
              </button>
            </div>
          </>
        ) : (
          <div>Empty Cart</div>
        )}
      </div>
 {/* Footer Section */}
      <footer className="bg-white py-8 mt-16 border-t border-gray-200">
        <div className="text-center text-gray-600">
          <p className="mb-2">🍔 Food Delivery Website</p>
          <p className="text-sm">Made with ❤️ for food lovers everywhere</p>
        </div>
      </footer>


    </div>
          
  );
}



export default Home;
