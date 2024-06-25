import React from 'react';
import { Link } from 'react-router-dom';

import img1 from '../assets/Images/1.png';
import img2 from '../assets/Images/2.png';
import img3 from '../assets/Images/3.png';

import arrowUp from "../assets/Icons/arrow-up-right.png"

const AboutSection = () => {
    return (
        <>
            <div className='about-section border-t-2 border-black mx-8 mt-6'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex flex-col justify-center items-center w-[900px] h-[232px] mt-8'>
                        <p className='text-5xl font-semibold text-center'>Forming an irrational love between clients and their buildings</p>
                        <div className='flex flex-col items-center mt-8 font-normal text-2xl'>
                            <p>Our approach starts with...</p>
                            <p>How do you want to make people feel?</p>
                        </div>
                    </div>
                    <div className='flex gap-10'>
                        <img src={img1} alt="img1" />
                        <img src={img2} alt="img2" />
                        <img src={img3} alt="img3" />
                    </div>
                    <div className=' flex flex-col items-center w-[520px] h-[220px] mt-8'>
                        <p className='text-2xl font-normal text-center'>In the face of changing trends and technologies, ARK House creates architecture that remains relevant - not based on trends, fads or dates - but on timeless human truths.</p>

                        <div className='flex flex-row mt-8'>
                            <button className='bg-black text-white w-32 h-12'>
                                <Link to={"/history"}>Our History</Link>
                            </button>
                            <img className='p-2 border-4 border-black' src={arrowUp} alt="arrow-up" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AboutSection
