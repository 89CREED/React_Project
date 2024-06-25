import React from 'react'
import ContactUs from './ContactUs'

import img from '../assets/Images/HeroSectionImage.png'

import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const HeroSection = () => {
    return (
        <>
            <div className='hero-section flex justify-center border-t-2 border-black mx-8 mt-6 h-[886px] relative'>
                <div className='absolute top-[170px] '>
                    <img src={img} alt="img" className='w-[1260px] h-[692px]' />
                </div>
                <div className='container flex justify-between mx-auto mt-10 '>
                    <div className='relative'>
                        <div className='absolute left-[490px] top-5 flex justify-center'>
                            <span className='text-lg font-medium'>Since 1975</span>
                        </div>
                        <div className='absolute left-[580px] right-1 top-8 w-4'>
                            <hr className='border-t-2 border-black' />
                        </div>
                        <div className='text-[104px] font-bold'>
                            <p>Architecture.</p>
                            <p>Planning.</p>
                            <p>Design.</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-28'>
                        <ContactUs />
                        <div className='flex gap-8 ml-8'>
                            <FaInstagram size={24} />
                            <FaTwitter size={24} />
                            <FaLinkedinIn size={24} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection
