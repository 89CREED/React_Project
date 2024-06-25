import React, { useState } from 'react';
import ContactUs from './ContactUs';
import { Link } from 'react-router-dom';

import img4 from '../assets/Images/Services-image.png';
import landscape from '../assets/Images/landscape.png';
import interior from '../assets/Images/interior.jpg';
import design from '../assets/Images/Agriculture-college.png';


import arrowUp from "../assets/Icons/arrow-up-right.png";

const ServicesSection = () => {

    
    const images = {
        Architecture: img4,
        Landscape: landscape,
        Interior: interior,
        Design: design,
    }
    const [currentImg, setCurrentImg] = useState(images.Architecture);
    const click = (section) => {
        setCurrentImg(images[section]);
    };

    return (
        <>
            <div className='services-section mt-8'>
                <div className='flex items-center justify-between p-20 pb-6 border-b-2 border-black mx-8'>
                    <h1 className='text-5xl font-semibold'>Services</h1>
                    <div className='flex flex-row'>
                        <button className='bg-black text-white w-32 h-12'>
                            <Link to={"/projects"}>Discovery All</Link>
                        </button>
                        <img className='p-2 border-4 border-black' src={arrowUp} alt="arrow-up" />
                    </div>
                </div>
                <div className='flex justify-center gap-20 mt-8'>
                    <div className='flex flex-col items-center w-[447px] h-[505px]'>
                        {/* <img src={icon3} alt="three" /> */}
                        <p className='text-[350px]'>3</p>
                        <p className='text-6xl font-bold text-center'>Offices around the world</p>
                    </div>
                    <div className='flex items-center'>
                        <ul className='flex flex-col gap-24 text-2xl font-medium'>
                            {Object.keys(images).map((section) => (
                                <li
                                    key={section}
                                    onClick={() => click(section)}
                                    className='cursor-pointer'
                                >{section}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        {currentImg && <img src={currentImg} alt='current' className='w-[600px] h-[640px]'/>}
                    </div>
                </div>
                <div className='flex flex-col mt-4'>
                    <div className='w-[560px] h-[148px] ml-[56%]'>
                        <p className='text-xl font-normal mb-4'>At the heart of everything we do is the human experience to feel. To love. To image. To wonder. To guide. To jest. To rule. To serve. To belong.</p>
                        <ContactUs />
                    </div>
                </div>
            </div>
        </>
    )
};

export default ServicesSection
