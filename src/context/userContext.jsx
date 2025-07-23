import React, { createContext, useState } from 'react';
import { food_items } from '../Pages/food'
export const dataContext =createContext();

function userContext({children}) {
  let[cate,setCate]= useState([food_items]);
  let [input,setInput]=useState("");
  let [showCart,setShowCart]=useState(false);
let data = {
input,
setInput,
cate,
setCate,
showCart,
setShowCart
}
  return (
    <div>
      <dataContext.Provider value={{cate,setCate,input,setInput,showCart,setShowCart}}>
      {children}
      </dataContext.Provider>
    </div>
  );
}

export default userContext
