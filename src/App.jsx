/**
 * Main App Component
 * 
 * This is the root component of the Food Delivery Website application.
 * It renders the Home page which contains the main functionality.
 * 
 * @author Antima Bhardawaj
 * @version 1.0.0
 */

import React from 'react'
import Home from './pages/Home'
import './App.css'

function App() {
  return (
    <div className="app">
      <Home />
    </div>
  )
}

export default App
