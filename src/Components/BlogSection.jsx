import React from 'react'

import card1 from '../assets/Images/Card1.png'
import card2 from '../assets/Images/Card2.png'
import arrowUp from "../assets/Icons/arrow-up-right.png"

const BlogSection = () => {
    return (
        <>
            <div className='blog-section'>
                <div className='flex items-center justify-between p-20 pb-6 border-b-2 border-black mx-8'>
                    <h1 className='text-5xl font-semibold'>Blog</h1>
                    <div className='flex flex-row'>
                        <button className='bg-black text-white w-32 h-12'>Show More</button>
                        <img className='p-2 border-4 border-black' src={arrowUp} alt="arrow-up" />
                    </div>
                </div>
                <div className='flex items-center justify-center gap-10 mt-14'>
                    <img src={card1} alt="card1" />
                    <img src={card2} alt="card2" />
                </div>
            </div>
        </>
    )
}

export default BlogSection
