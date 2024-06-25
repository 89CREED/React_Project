import React from 'react'
import { Link } from 'react-router-dom'
import arrowUp from "../assets/Icons/arrow-up-right.png"

const ContactUs = () => {
  return (
    <div className='flex flex-row'>
      <button className='bg-black text-white w-32 h-12'><Link to={"/contactNumber"}>Contact Us</Link></button>
      <img className='p-2 border-4 border-black' src={arrowUp} alt="arrow-up" />
    </div>
  )
}

export default ContactUs
