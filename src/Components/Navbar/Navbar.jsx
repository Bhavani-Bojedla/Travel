import React from 'react'
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className='flex justify-between w-full pt-24'>
      <div className=' pl-28'>
       <div className='h-10 bg-cover w-28 nav-left bg-logo'>
       </div>
       </div>
       <div className='flex pl-5 nav-middle'>
          <div className='pl-8 text-lg font-medium text-white cursor-pointer nav-button'>Cart</div>
          <div className='pl-8 text-lg font-medium text-white cursor-pointer nav-button'>Checkout</div>
          <div className='pl-8 text-lg font-medium cursor-pointer text-blue-950 nav-button'>Home</div>
          <div className='pl-8 text-lg font-medium text-white cursor-pointer nav-button'>My Account</div>
          <div className='pl-8 text-lg font-medium text-white cursor-pointer nav-button'>Page</div>
          <div className='pl-8 text-lg font-medium text-white cursor-pointer nav-button'>Shop</div>
       </div>
       <div className='flex pr-20 nav-right'>
          <div><IoSearch className='mr-10 text-lg text-white'/></div>
          <div><FaUser className='text-white'/></div>
       </div>
    </div>
  )
}
