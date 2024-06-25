import React from 'react';
import ContactUs from './ContactUs';
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className='mt-20 flex flex-col'>
      <div className='flex items-center justify-between p-20 pb-6 border-b-2 border-black mx-8'>
        <p className='font-semibold text-5xl'>Start a Project?</p>
        <ContactUs />
      </div>

      <div className='flex flex-col  mx-8 p-20'>
        <div className='flex items-center justify-between'>
          <div>
            <p className='text-[40px] font-semibold'>Support is available</p>
            <p>24 hours</p>
            <ContactUs />
          </div>

          <div className='flex items-center justify-between gap-16'>
            <ul className='font-normal text-lg'>
              <li>North</li>
              <li>AFL Architects</li>
              <li>St George's House</li>
              <li>56 Peter Street</li>
              <li>Manchester</li>
              <li>M2 3NQ</li>
              <br />
              <li>+44 (0)161 236 6263</li>
            </ul>
            <ul className='font-normal text-lg'>
              <li>Midlands</li>
              <li>AFL Architects</li>
              <li>Unit 12</li>
              <li>133 Newhall Street</li>
              <li>Birmingham</li>
              <li>B3 1SF</li>
              <br />
              <li>+44 (0)121 289 4363</li>
            </ul>
            <ul className='font-normal text-lg'>
              <li>South</li>
              <li>AFL Architects</li>
              <li>24 Greeville Street</li>
              <li>London</li>
              <li>EC1N 8SS</li>
              <li>E4</li>
              <br />
              <li>+44 (0)20 3096 9263</li>
            </ul>
          </div>
        </div>

        <div className='mt-10 flex items-center justify-between'>
          <div className=''>
            <ul className='flex items-center justify-between gap-8 font-normal text-xl'>
              <li className='relative'>
                <span className='absolute -top-4 left- text-xs font-semibold w-3 h-4'>1</span>
                About
              </li>
              <li className='relative'>
                <span className='absolute -top-4 left- text-xs font-semibold w-3 h-4'>2</span>
                Services
              </li>
              <li className='relative'>
                <span className='absolute -top-4 left- text-xs font-semibold w-3 h-4'>3</span>
                Projects
              </li>
              <li className='relative'>
                <span className='absolute -top-4 left- text-xs font-semibold w-3 h-4'>4</span>
                Team
              </li>
              <li className='relative'>
                <span className='absolute -top-4 left- text-xs font-semibold w-3 h-4'>5</span>
                Blog
              </li>
            </ul>
          </div>

          <div className='flex items-center justify-between gap-8'>
            <FaInstagram size={24} />
            <FaTwitter size={24} />
            <FaLinkedinIn size={24} />
          </div>
        </div>
      </div>

      <div className='flex justify-between p-20 border-t-2 border-black mx-10'>
        <p className='font-normal text-base'>&copy; Copywriting | All Rights Reserved</p>
        <p className='font-normal text-base'>Terms of Use | Privacy</p>
      </div>
      


    </footer>
  )
}

export default Footer
