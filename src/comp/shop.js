import React, { useState } from 'react'
import './shop.css'
import { AiFillHeart } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
const Shop = ({shop,Filter, allcatefilter,addtocart,cart}) => {
    //Toggle product detail
    const[showDetail,setShowDetail]=useState(false)
    //Detail page data
    const [detail, setDetail]= useState([])
    // showing detail box
    const detailpage=(product)=>{
        const detaildata = ([{product}])
        const productdetail=detaildata[0]['product']
        //console.log(productdetail)
        setDetail(productdetail)
        setShowDetail(true)
    }
    
    const closedetail=()=>{
        setShowDetail(false)
    }
  return (
    <div>
       {
        showDetail ? 
        <>
        <div className='product_detail'>
            <button className='close_btn' onClick={closedetail}><AiOutlineClose /></button>
            <div className='container'>
                <div className='img_box'>
                    <img src={detail.image} alt=''></img>
                </div>
                <div className='info'>
                    <h4>{detail.cat}</h4>
                    <h2>{detail.Name}</h2>
                    <p>A Screen everyone will love : Whether your family is streaming or </p>
                    <h3>${detail.price}</h3>
                    <button onClick={()=> addtocart(detail)}>Add to Cart</button>
                </div>
            </div>
        </div>
        </>
         :
        null
        
       }
        
        <div className='shop'>
            <h2> # shop</h2>
            <p>Home . shop</p>
            <div className='container'>
                <div className='left_box'>
                    <div className='category'>
                        <div className='header'>
                            <h2>all categories</h2>
                        </div>
                        <div className='box'>
                            <ul>
                                <li onClick={()=>allcatefilter()}># All</li>
                                <li onClick={()=>Filter("candleholder")}># candleholder</li>
                                <li onClick={()=>Filter("table")}># table</li>
                                <li onClick={()=>Filter("necklace")}># necklace</li>
                                <li onClick={()=>Filter("toy")}># toy</li>
                                <li onClick={()=>Filter("carpet")}># carpet</li>
                                <li onClick={()=>Filter("pillow")}># pillow</li>
                                <li onClick={()=>Filter("wall_paper")}># wall_paper</li>
                                <li onClick={()=>Filter("ring")}># ring</li>
                            </ul>
                        </div>
                    </div>
                    <div className='banner'>
                        <div className='img_box'>
                            <img src='image/shop_left.avif' alt=''></img>
                        </div>
                    </div>


                </div>
                <div className='right_box'>
                    <div className='banner'>
                        <div className='img_box'>
                            <img src='image/Slide6.webp'></img>
                        </div>
                    </div>
                    <div className='product_box'>
                        <h2>Shop Product</h2>
                        <div className='product_container'>
                            {
                                shop.map((curElm)=>{
                                    return(
                                        <>
                                        <div className='box'>
                                            <div className='img_box'>
                                                <img src={curElm.image} alt=''></img>
                                                <div className='icon'>
                                                    <li><AiFillHeart /></li>
                                                    <li onClick={()=>detailpage(curElm)}><AiFillEye /></li>
                                                </div>
                                            </div>
                                            <div className='detail'>
                                                <h3>{curElm.Name}</h3>
                                                <p>${curElm.price}</p>
                                                <button onClick={()=> addtocart(curElm)}>Add to Cart</button>

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
    </div>
  )
}

export default Shop