import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './home'
import Shop from './shop'
import Cart from './cart'
import Contact from './contact'

const Rout = ({shop,Filter,allcatefilter,addtocart,cart,setCart}) => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home addtocart={addtocart}/>}/>
            <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
            <Route path='shop' element={<Shop shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </div>
  )
}

export default Rout