import { useState, useEffect } from 'react';
import Navbar from './Component/Navbar';
import Cart from './Pages/cart';
import Home from './Pages/home';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  let [cartItems, setCart] = useState([]);

  let handleAdd = (product)=>{
    let newCart = [...cartItems,product];
    localStorage.setItem("Cart",JSON.stringify(newCart));
    setCart(newCart);
  }

  let handleRem = (product)=>{
    let filterCart = cartItems.filter((item)=>{
        return item.id!== product.id;
    })
    localStorage.setItem("Cart",JSON.stringify(filterCart));
    setCart(filterCart);
  }

  useEffect(()=>{
    let fromStorage = localStorage.getItem("Cart");
    if(!fromStorage){
      return;
    }
    setCart(JSON.parse(fromStorage));
    },[])

  return (
    <BrowserRouter>
    <Navbar cartItems={cartItems}/>
    <Routes>
      <Route path='/' element={
            <Home cartItems={cartItems}
                  handleAdd={handleAdd}
            />}> 
      </Route>
      <Route path='/cart' element={
            <Cart cartItems={cartItems}
                  handleRem={handleRem}
            />}>   
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
