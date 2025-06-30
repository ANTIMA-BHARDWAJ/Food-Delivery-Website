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

import React, { useState } from 'react'
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

/**
 * Navbar Component - Top navigation bar
 * @returns {JSX.Element} The rendered navigation bar
 */
function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount] = useState(0); // TODO: Connect to cart state management

  /**
   * Handle search form submission
   * @param {Event} e - Form submission event
   */
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // TODO: Implement search functionality
      console.log('Searching for:', searchQuery);
    }
  };

  /**
   * Handle search input change
   * @param {Event} e - Input change event
   */
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className='w-full h-[100px] flex justify-between items-center px-5 md:px-8 bg-gradient-to-r from-slate-100 to-slate-200 animate-slide-in'>
      {/* Brand Logo */}
      <div 
        className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer animate-pulse-ring'
        role="button"
        tabIndex={0}
        aria-label="Food Delivery Home"
      >
        <MdFastfood className='w-[30px] h-[30px] text-green-400 animate-bounce-soft' />
      </div>

      {/* Search Bar */}
      <form 
        className='w-[45%] h-[60px] flex items-center px-5 gap-3 rounded-md shadow-md md:w-[70%] search-input'
        onSubmit={handleSearch}
      >
        <IoSearch className='text-green-400 w-[20px] h-[20px] flex-shrink-0' />
        <input 
          type="text" 
          placeholder='Search for delicious food...' 
          className='w-full outline-none text-[16px] md:text-[18px] text-gray-700 placeholder-gray-400 bg-transparent'
          value={searchQuery}
          onChange={handleSearchChange}
          aria-label="Search for food items"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="text-gray-400 hover:text-gray-600 text-lg transition-colors duration-200"
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </form>

      {/* Shopping Cart */}
      <div 
        className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative card-hover cursor-pointer'
        role="button"
        tabIndex={0}
        aria-label={`Shopping cart with ${cartCount} items`}
        onKeyDown={(e) => e.key === 'Enter' && console.log('Open cart')}
      >
        {/* Cart Counter Badge */}
        <span 
          className={`absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-green-400 to-green-500 text-white font-bold text-[12px] rounded-full flex items-center justify-center ${
            cartCount > 0 ? 'scale-100 animate-bounce-soft' : 'scale-0'
          } transition-transform duration-200`}
        >
          {cartCount > 99 ? '99+' : cartCount}
        </span>
        <FaShoppingCart className='w-[25px] h-[25px] text-green-400' />
      </div>
    </nav>
  )
}

export default Navbar
