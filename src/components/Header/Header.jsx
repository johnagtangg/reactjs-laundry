import React from 'react';
import "./Header.css";
import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <div className='header flex flex-col' id = "header">
        <Navbar />

        <div className='container flex' id='home'>
            <div className='header-content'>
                <h2 className='text-uppercase text-white op-07 fw-6 ls-2'>Wash and Dry, Pick Up, Delivery</h2>
                <h1 className='text-white fw-6 header-title'>JnJ <span className='text-brown'>Laundry Services</span> located in, Butuan City</h1>
                <div className='btn-groups flex'>
                  <button type = "button" className='btn-item bg-brown fw-4 ls-2'>Book a Service</button>
                  <button type = "button" className='btn-item bg-dark fw-4 ls-2'>Contact Me</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header