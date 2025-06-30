/**
 * Card Component
 * 
 * Displays individual food items with:
 * - Food image
 * - Name and price
 * - Food type indicator (veg/non-veg)
 * - Add to cart functionality
 * 
 * Features:
 * - Responsive design
 * - Hover effects
 * - Accessibility support
 * - Type indicators with icons
 * 
 * @author Antima Bhardawaj
 * @version 1.0.0
 */

import React from 'react'
import { GiChickenOven } from "react-icons/gi";
import { LuLeafyGreen } from "react-icons/lu";

/**
 * Card Component - Individual food item display
 * @param {Object} props - Component props
 * @param {string} props.name - Food item name
 * @param {string} props.image - Food item image URL
 * @param {number} props.id - Unique food item ID
 * @param {number} props.price - Food item price
 * @param {string} props.type - Food type (veg/non-veg)
 * @param {number} [props.quantity] - Food quantity (optional)
 * @param {string} [props.category] - Food category (optional)
 * @returns {JSX.Element} The rendered food card
 */
function Card({ name, image, id, price, type, quantity, category }) {
  
  /**
   * Handle add to cart action
   * @param {Event} e - Click event
   */
  const handleAddToCart = (e) => {
    e.preventDefault();
    // TODO: Implement add to cart functionality
    console.log(`Adding ${name} to cart`, { id, name, price, type, quantity });
    
    // Show user feedback (you can replace with a toast notification)
    alert(`${name} added to cart!`);
  };

  /**
   * Get the appropriate icon and color for food type
   * @returns {Object} Icon component and styling
   */
  const getFoodTypeIcon = () => {
    if (type === "veg") {
      return {
        icon: <LuLeafyGreen className="w-5 h-5" />,
        color: "text-green-500",
        bgColor: "bg-green-50",
        customClass: "food-type-veg"
      };
    } else {
      return {
        icon: <GiChickenOven className="w-5 h-5" />,
        color: "text-red-500", 
        bgColor: "bg-red-50",
        customClass: "food-type-non-veg"
      };
    }
  };

  const typeInfo = getFoodTypeIcon();

  return (
    <div className='w-[300px] h-[400px] bg-white p-4 rounded-lg flex flex-col gap-3 shadow-lg card-hover border border-gray-100 animate-fade-in'>
      {/* Food Image */}
      <div className='w-full h-[50%] overflow-hidden rounded-lg bg-gray-100 relative'>
        <img 
          src={image} 
          alt={`${name} - ${type} food`}
          className='w-full h-full object-cover hover:scale-110 transition-transform duration-300'
          onError={(e) => {
            e.target.src = '/placeholder-food.jpg'; // Fallback image
          }}
        />
        <div className="absolute top-2 right-2 z-10">
          <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${typeInfo.bgColor} ${typeInfo.customClass}`}>
            <span className={typeInfo.color}>
              {typeInfo.icon}
            </span>
          </div>
        </div>
      </div>

      {/* Food Information */}
      <div className="flex-1 flex flex-col justify-between">
        {/* Food Name */}
        <div className='text-xl font-semibold text-gray-800 mb-2 line-clamp-2'>
          {name}
        </div>

        {/* Price and Type Section */}
        <div className='w-full flex justify-between items-center mb-3'>
          {/* Price */}
          <div className='text-lg font-bold text-green-600'>
            ₹{price}/-
          </div>
          
          {/* Food Type Text */}
          <div className={`flex items-center gap-2 px-2 py-1 rounded-full ${typeInfo.bgColor}`}>
            <span className={`text-sm font-medium capitalize ${typeInfo.color}`}>
              {type}
            </span>
          </div>
        </div>

        {/* Additional Info */}
        {(quantity || category) && (
          <div className="text-sm text-gray-500 mb-3 flex gap-4">
            {quantity && <span>Qty: {quantity}</span>}
            {category && <span className="capitalize">Category: {category}</span>}
          </div>
        )}

        {/* Add to Cart Button */}
        <button 
          className='btn-primary w-full'
          onClick={handleAddToCart}
          aria-label={`Add ${name} to cart for ₹${price}`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default Card
