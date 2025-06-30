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

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { categories } from '../data/Category'
import Card from '../components/Card'
import { food_items } from '../data/food'

/**
 * Home Component - Main page of the application
 * @returns {JSX.Element} The rendered Home page
 */
function Home() {
  // State to manage the currently displayed food items
  const [filteredItems, setFilteredItems] = useState(food_items);
  const [activeCategory, setActiveCategory] = useState("All");

  /**
   * Filter food items based on selected category
   * @param {string} category - The category to filter by (All, veg, non-veg, etc.)
   */
  const filterByCategory = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredItems(food_items);
    } else {
      const newList = food_items.filter((item) => item.food_type === category);
      setFilteredItems(newList);
    }
  }

  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-slate-100 to-slate-200'>
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Hero Section */}
      <div className="text-center py-8 px-4 animate-fade-in">
        <h1 className="responsive-heading font-bold text-gray-800 mb-4">
          Delicious Food Delivered Fast
        </h1>
        <p className="responsive-text text-gray-600 max-w-2xl mx-auto">
          Choose from our amazing variety of fresh, delicious meals and get them delivered right to your doorstep
        </p>
      </div>
      
      {/* Category Filter Section */}
      <div className='flex flex-wrap-reverse justify-center items-center gap-6 w-full px-4 py-6'>
        {categories.map((item, index) => (
          <div 
            key={item.id}
            className={`w-[140px] h-[150px] category-card flex flex-col items-center gap-3 p-4 justify-center text-[18px] font-semibold text-gray-600 rounded-lg cursor-pointer ${
              activeCategory === item.name ? 'bg-gradient-to-br from-green-100 to-green-200 border-green-300' : ''
            }`}
            onClick={() => filterByCategory(item.name)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && filterByCategory(item.name)}
            aria-label={`Filter by ${item.name}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="transform transition-transform duration-200 hover:scale-110">
              {item.Image}
            </div>
            <span className="text-center">{item.name}</span>
          </div>
        ))}
      </div>

      {/* Food Items Grid */}
      <div className='w-full flex flex-wrap gap-5 justify-center items-center px-5 pt-8 pb-8'>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div
              key={item.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card
                name={item.food_name}
                image={item.food_image}
                price={item.price}
                id={item.id}
                type={item.food_type}
                quantity={item.food_quantity}
                category={item["food-category"]}
              />
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 text-xl py-10 animate-fade-in">
            <div className="text-6xl mb-4">🍽️</div>
            <p>No items found for this category.</p>
            <button 
              onClick={() => filterByCategory("All")}
              className="mt-4 btn-primary"
            >
              Show All Items
            </button>
          </div>
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
  )
}

export default Home

