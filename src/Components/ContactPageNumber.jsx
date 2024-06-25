import React from 'react'
import ContactUs from './ContactUs'
import { Link} from "react-router-dom";
import { useEffect } from 'react'

const ContactPageNumber = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='flex flex-col items-center justify-center  mx-8 mt-6'>
        <h1 className='text-5xl font-semibold mt-40'>We will be glad to contact you</h1>
        <div className='mt-10'>
          <button className='text-lg font-semibold w-40 h-10 border-2 border-black'>Phone Number</button>
          <button className='text-lg font-semibold w-40 h-10 border-2 border-black -ml-0.5'><Link to = '/contactEmail'>Email</Link></button>
        </div>
        <p className='text-2xl font-normal mt-8 w-80 text-center'>Give us your number and we will call you now</p>
        <input type="text" placeholder='Your Name' className='text-2xl border-2 w-[600px] h-16 mt-8 p-6'/>
        <input type="text" placeholder='(+33)7 00 55 59 27' className='text-2xl border-2 w-[600px] h-16 mt-8 mb-8 p-6'/>
        <ContactUs/>
      </div>
    </>
  )
}

export default ContactPageNumber
