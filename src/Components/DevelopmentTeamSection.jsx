import React, { useEffect, useState } from 'react';

import ContactUs from './ContactUs'


import employee1 from '../assets/Images/Employee1.png'
import employee2 from '../assets/Images/Employee2.png'
import employee3 from '../assets/Images/Employee3.png'
import employee4 from '../assets/Images/Employee4.png'
import employee5 from '../assets/Images/Employee5.png'
import employee6 from '../assets/Images/Employee6.png'



const managers = [
    { src: employee1, alt: "Jane Cooper" },
    { src: employee2, alt: "Cameron Wiliams" },
    { src: employee3, alt: "Brooklyn Simson" },
];

const engineers = [
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

    const[shuffledManagers, setShuffledManagers] = useState([]);
    const[shuffledEngineers, setShuffledEngineers] = useState([]);

    useEffect( () => {
        setShuffledManagers(shuffleArr(managers));
        setShuffledEngineers(shuffleArr(engineers));
    }, []);


    return (
        <>
            <div>
                <div className='flex justify-between mx-28 mt-28'>
                    <h1 className='text-5xl font-semibold'>Development team</h1>
                    <ContactUs/>
                </div>
                <div className='flex justify-center gap-20 mt-10 border-t-2 border-black mx-8'>
                    <div className='mt-12'>
                        <ul className='flex flex-col gap-28 text-2xl font-medium cursor-pointer'>
                            <li>Managers</li>
                        </ul>
                    </div>
                    <div className='grid grid-rows-1 grid-cols-3 gap-8 mt-12'>
                        {shuffledManagers.map((image, index) => (
                            <img key={index} src={image.src} alt={image.alt} />
                        ))}
                    </div>
                </div>
                <div className='flex  justify-center gap-20 mt-10'>
                    <div>
                        <ul className='flex flex-col gap-28 text-2xl font-medium cursor-pointer'>
                            <li>Engineers</li>
                        </ul>
                    </div>
                    <div className='grid grid-rows-1 grid-cols-3 gap-8'>
                        {shuffledEngineers.map((image, index) => (
                            <img key={index} src={image.src} alt={image.alt} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
};

export default OurTeamSection
