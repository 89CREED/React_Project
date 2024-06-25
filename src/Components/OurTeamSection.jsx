import React, { useState } from 'react'


import employee1 from '../assets/Images/Employee1.png'
import employee2 from '../assets/Images/Employee2.png'
import employee3 from '../assets/Images/Employee3.png'
import employee4 from '../assets/Images/Employee4.png'
import employee5 from '../assets/Images/Employee5.png'
import employee6 from '../assets/Images/Employee6.png'
import arrowUp from "../assets/Icons/arrow-up-right.png"

const images = [
    { src: employee1, alt: "Jane Cooper" },
    { src: employee2, alt: "Cameron Wiliams" },
    { src: employee3, alt: "Brooklyn Simson" },
    { src: employee4, alt: "Jacob Jones" },
    { src: employee5, alt: "Jerome Bell" },
    { src: employee6, alt: "Kristin Watson" }
];

const shuffleArr = (array) => {
    let shuffledArr = array.slice();
    for (let i = shuffledArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
    }
    return shuffledArr;
};

const OurTeamSection = () => {


    const [shuffledImages, setShuffledImages] = useState(images);

    const handleItemClick = () => {
        setShuffledImages(shuffleArr(images));
    }


    return (
        <>
            <div className='our-team'>
                <div className='flex items-center justify-between p-20 pb-6 border-b-2 border-black mx-8'>
                    <h1 className='text-5xl font-semibold'>Our Team</h1>
                    <div className='flex flex-row'>
                        <button className='bg-black text-white w-32 h-12'>Show All</button>
                        <img className='p-2 border-4 border-black' src={arrowUp} alt="arrow-up" />
                    </div>
                </div>

                <div className='w-[710px] h-[128px] mt-10 ml-32'>
                    <p className='text-2xl font-normal'>Our team of expert architects and builders, with over 45 years of combined experience, will bring your vision to life. Trust us to deliver functional and beautiful structures that exceed expectations.
                    </p>
                </div>

                <div className='flex items-center justify-center gap-20 mt-10'>
                    <div>
                        <ul className='flex flex-col gap-28 text-2xl font-medium cursor-pointer'>
                            <li onClick={handleItemClick}>Management</li>
                            <li onClick={handleItemClick}>Architects</li>
                            <li onClick={handleItemClick}>Engineers</li>
                            <li onClick={handleItemClick}>Builders</li>
                        </ul>
                    </div>
                    <div className='grid grid-rows-2 grid-cols-3 gap-8'>
                        {shuffledImages.map((image, index) => (
                            <img key={index} src={image.src} alt={image.alt} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
};

export default OurTeamSection
