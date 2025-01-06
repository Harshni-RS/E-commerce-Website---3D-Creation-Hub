import React, { useEffect, useState } from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import Homeproduct from './home_product'
import { AiFillEye } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { BiLogoTwitter } from "react-icons/bi";   
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BiLogoYoutube } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Home = ({addtocart}) => {
  //Product category
  const [newProduct, setNewProduct]=useState([])
  const [featuredProduct, setFeaturedProduct]=useState([])
  const [topProduct, setTopProduct]=useState([])
  
  //Trending product
  const [trendingProduct, setTrendingProduct]=useState(Homeproduct)
  //Filter of trending product
  const filtercate=(x)=>{
    const fliterproduct= Homeproduct.filter((curElm)=>{
      return curElm.type === x
    })
    setTrendingProduct(fliterproduct)
  }
  const allTrendingProduct=()=>{
    setTrendingProduct(Homeproduct)
  }
  //Product type
  useEffect(()=>{
    productcategory()
  })
  const productcategory=()=>{
    //new product
    const newcategory=Homeproduct.filter((x)=>{
      return x.type==='new'
    })
    setNewProduct(newcategory)
    //Featured product
    const featuredcategory=Homeproduct.filter((x)=>{
      return x.type==='featured'
    })
    setFeaturedProduct(featuredcategory)
    //top product
    const topcategory=Homeproduct.filter((x)=>{
      return x.type==='top'
    })
    setTopProduct(topcategory)
  }
  return (
    <div>
        <div className='home'>
            <div className='top_banner'>
              <div className='contant'>
                <h3>Silver Aluminium</h3>
                <h2>3d Wall Paper</h2>
                <p>30% off at your first order</p>
                <Link to ='/shop' className='link'>Shop now</Link>
              </div>

            </div>
            <div className='trending'>
              <div className='container'>
                <div className='left_box'>
                  <div className='header'>
                    <div className='heading'>
                      <h2 onClick={()=>allTrendingProduct()}>trending product</h2>
                    </div>
                    <div className='cate'>
                      <h3 onClick={()=>filtercate('new')}>New</h3>
                      <h3 onClick={()=>filtercate('featured')}>Featured</h3>
                      <h3 onClick={()=>filtercate('top')}>top selling</h3>
                    </div>
                  </div>
                  <div className='products'>
                    <div className='container'>
                      {
                        trendingProduct.map((curElm)=>
                        {
                          return(
                            <>
                            <div className='box'>
                              <div className='img_box'>
                                <img src={curElm.image} alt=''></img>
                                <div className='icon'>
                                  <div className='icon_box'>
                                    <AiFillEye />
                                  </div>
                                  <div className='icon_box'>
                                    <AiFillHeart />
                                  </div>
                                </div>
                              </div>
                              <div className='info'>
                                <h3>{curElm.Name}</h3>
                                <p>${curElm.price}</p>
                                <button className='btn' onClick={()=>addtocart(curElm)}>Add to cart</button>
                              </div>
                            </div>
                              </>
                          )
                        })
                      }

                    </div>
                    <button>Show more</button>
                  </div>
                </div>
                <div className='right_box'>
                  <div className='right_container'>
                    <div className='testimonial'>
                      <div className='head'>
                        <h3>our testimonial</h3>
                      </div>
                      <div className='detail'>
                        <div className='img_box'>
                          <img src='image/T1.png' alt='testimonial'></img>
                        </div>
                        <div className='info'>
                          <h3>Harshni</h3>
                          <h4>Web developer</h4>

                        </div>
                      </div>
                    </div>
                    <div className='newsletter'>
                      <div className='head'>
                        <h3>newsletter</h3>
                      </div>
                      <div className='form'>
                        <p>join our mailing list</p>
                        <input type='email' placeholder='E-mail' autoComplete='off'></input>
                        <button>subscribe</button>
                        <div className='icon_box'>
                          <div className='icon'>
                            <BiLogoFacebook />
                          </div>
                          <div className='icon'>
                            <BiLogoTwitter />
                          </div>
                          <div className='icon'>
                            <BiLogoInstagramAlt />
                          </div>
                          <div className='icon'>
                            <BiLogoYoutube />
                          </div>
                          
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='product_type'>
              <div className='container'>
                <div className='box'>
                <div className='header'>
                  <h2>New Product</h2>
                </div>
                {
                  newProduct.map((curElm)=>{
                    return(
                      <>
                      <div className='productbox'>
                        <div className='img-box'>
                        <img src={curElm.image} alt='' style={{width:'80px',height:'80px'}}/>
                        </div>
                        <div className='detail'>
                          <h3>{curElm.Name}</h3>
                          <p>$ {curElm.price}</p>
                          <div className='icon'>
                            <button><AiFillEye/></button>
                            <button><AiFillHeart/></button>
                            <button onClick={()=>addtocart(curElm)}><AiOutlineShoppingCart /></button>
                          </div>
                        </div>

                      </div>
                      </>
                    )
                  })
                }
                

                </div>
                <div className='box'>
                <div className='header'>
                  <h2>Featured Product</h2>
                </div>
                {
                  featuredProduct.map((curElm)=>{
                    return(
                      <>
                      <div className='productbox'>
                        <div className='img-box'>
                        <img src={curElm.image} alt='' style={{width:'80px',height:'80px'}}/>
                        </div>
                        <div className='detail'>
                          <h3>{curElm.Name}</h3>
                          <p>$ {curElm.price}</p>
                          <div className='icon'>
                            <button><AiFillEye/></button>
                            <button><AiFillHeart/></button>
                            <button onClick={()=>addtocart(curElm)}><AiOutlineShoppingCart /></button>
                          </div>
                        </div>

                      </div>
                      </>
                    )
                  })
                }
                

                </div>
                
                
                <div className='box'>
                <div className='header'>
                  <h2>Top Product</h2>
                </div>
                {
                  topProduct.map((curElm)=>{
                    return(
                      <>
                      <div className='productbox'>
                        <div className='img-box'>
                        <img src={curElm.image} alt='' style={{width:'80px',height:'80px'}}/>
                        </div>
                        <div className='detail'>
                          <h3>{curElm.Name}</h3>
                          <p>$ {curElm.price}</p>
                          <div className='icon'>
                            <button><AiFillEye/></button>
                            <button><AiFillHeart/></button>
                            <button onClick={()=>addtocart(curElm)}><AiOutlineShoppingCart /></button>
                          </div>
                        </div>

                      </div>
                      </>
                    )
                  })
                }
                

                </div>
                

              </div>
            </div>
        </div>
    </div>
  )
}

export default Home