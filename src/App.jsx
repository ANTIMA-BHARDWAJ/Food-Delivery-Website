/**
 * Main App Component
 * 
 * This is the root component of the Food Delivery Website application.
 * It renders the Home page which contains the main functionality.
 * 
 * @author Antima Bhardawaj
 * @version 1.0.0
 */

import React from 'react';
import Home from './Pages/Home';
import DataProvider from './context/userContext';

function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}
export default App
