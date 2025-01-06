import React from 'react'
import './footer.css'
import { FaPiggyBank } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
        <div className='footer'>
            <div className='container'>
                <div className='left-box'>
                    <div className='box'>
                        <div className='icon_box'>
                            <FaPiggyBank />
                        </div>
                        <div className='detail'>
                            <h3>Great Saving</h3>
                            <p>Lorem ipsum dolor sit amet,</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon_box'>
                            <FaShippingFast />
                        </div>
                        <div className='detail'>
                            <h3>Free delivery</h3>
                            <p>Lorem ipsum dolor sit amet,</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon_box'>
                            <FaHeadphones />
                        </div>
                        <div className='detail'>
                            <h3>24/7 support</h3>
                            <p>Lorem ipsum dolor sit amet,</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon_box'>
                            <FaWallet />
                        </div>
                        <div className='detail'>
                            <h3>money back</h3>
                            <p>Lorem ipsum dolor sit amet,</p>
                        </div>
                    </div>
                </div>
                <div className='right_box'>
                    <div className='header'>
                        <span><strong>CraftMy3D</strong></span>
                        <p>Lorem ipsum dolor sit amet, consectetur Nullscriptiing elit. Duis faucibus ipsum id sem Putconsequat Text.</p>
                    </div>
                    <div className='bottom'>
                        <div className='box'>
                            <h3>Your Account</h3>
                            <ul>
                                <li>About us</li>
                                <li>Account</li>
                                <li>Payment</li>
                                <li>Sales</li>
                            </ul>
                        </div>
                        <div className='box'>
                            <h3>products</h3>
                            <ul>
                                <li>Delivery</li>
                                <li>Track order</li>
                                <li>New product</li>
                                <li>Old product</li>
                            </ul>
                        </div>
                        <div className='box'>
                            <h3>Contact us</h3>
                            <ul>
                                <li>41,Sri ram nagar, Chennai, India</li>
                                <li>9876543210</li>
                                <li>harshnirs181@gmail.com</li>
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer