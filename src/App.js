import React, { useState } from 'react'
import Nav from './comp/Nav'
import { BrowserRouter } from 'react-router-dom'
import Rout from './comp/rout'
import Footer from './comp/footer'
import Homeproduct from './comp/home_product'
function App() {
  //add to cart
  const [cart,setCart]=useState([])
  //Shop page product
  const [shop,setShop]= useState(Homeproduct)
  //shop category product
  const Filter=(x)=>{
    const catefilter=Homeproduct.filter((product)=>{
      return product.cat === x
    })
    setShop(catefilter)
  }
  const allcatefilter=()=>{
    setShop(Homeproduct)
  }
  //Shop search filter
  const [search,setSearch]=useState('')
  const searchlength=(search || []).length ===0
  const searchproduct=()=>
  {
    if(searchlength)
    {
      alert("Please Search something")
      setShop(Homeproduct)
    }
    else
    {
      
        const searchfilter=Homeproduct.filter((x)=>
        {
          return x.cat===search
        })
        setShop(searchfilter)
      

    }
  }
  //Add to cart
  
  const addtocart=(product)=>{
    const exist=cart.find((x)=>{
      return x.id ===product.id
    })
    if(exist){
      alert("This product is aldready added in cart")
    }
    else{
      setCart([...cart,{...product,qty:1}])
      alert("Added to cart")

    }
    
    

  }
  console.log(cart)
  

  return (
    <div>
      <BrowserRouter>
        <Nav search={search} setSearch={setSearch} searchproduct={searchproduct}/>
        <Rout setCart={setCart} cart={cart} shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App