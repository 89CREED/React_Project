import React from 'react';
import ContactUs from './ContactUs';
import {Link} from 'react-router-dom';

import classroom from '../assets/Images/Classroom-building.png'
import monson from '../assets/Images/Monson-center.png'
import ecocenter from '../assets/Images/Ecocenter.png'
import fulton from '../assets/Images/Fulton.png'
import agriculture from '../assets/Images/Agriculture-college.png'
import housePlaza from '../assets/Images/House-plaza.png'
import jordanLine from '../assets/Images/Mid-jordan-line.png'
import laboratory from '../assets/Images/Laboratory-module2.png'
import geophysics from '../assets/Images/Geophysics.png'
import Sline from '../assets/Images/S-line.png'
import twoPointFive from '../assets/Icons/Numbers 25.png'
import arrowUp from "../assets/Icons/arrow-up-right.png"

const RecentProjectsSection = () => {
    return (
        <>
            <div className='recent-projects mt-8'>
                <div className='flex items-center justify-between p-20 pb-6 border-b-2 border-black mx-8'>
                    <h1 className='text-5xl font-semibold'>Recent Projects</h1>
                    <div className='flex flex-row'>
                        <button className='bg-black text-white w-32 h-12'>
                            <Link to={"/projects"}>Discovery All</Link>
                        </button>
                        <img className='p-2 border-4 border-black' src={arrowUp} alt="arrow-up" />
                    </div>
                </div>

                <div className='flex items-center justify-center gap-16 mt-10'>
                    <div>
                        <img src={classroom} alt="Classroom Building" />
                        <p className='text-xl font-medium'>UVU Clasroom Building</p>
                        <p className='text-lg font-normal'>Omer, UT</p>
                    </div>
                    <div>
                        <img src={monson} alt="Monson Center" />
                        <p className='text-xl font-medium'>Thomas S. Monson Center/</p>
                        <p className='text-lg font-normal'>Salt Lake City, UT</p>
                    </div>
                </div>

                <div id='count45' className='flex items-center justify-center gap-14 mt-14'>
                    <div>
                        <img src={ecocenter} alt="Ecocenter" />
                        <p className='text-xl font-medium'>UVU Swaner Preserve and Ecocenter</p>
                        <p className='text-lg font-normal'>Logan, UT</p>
                    </div>
                    <div className='flex flex-col items-center justify-center -mt-44'>
                        {/* <img src={fourtyfive} alt="Fourty Five" /> */}
                        <p className='text-[350px]' >45</p>
                        <h1 className='text-[56px] font-bold w-[557px] text-center mt-4'>Yeas of architecture, planning, design</h1>
                    </div>
                </div>

                <div className='flex justify-center gap-16 mt-14'>
                    <div>
                        <img src={fulton} alt="Fulton Library" />
                        <p className='text-xl font-medium'>UVU Fulton Library</p>
                        <p className='text-lg font-normal'>Orem, UT</p>
                    </div>
                    <div>
                        <img src={agriculture} alt="College of Agriculture" />
                        <p className='text-xl font-medium'>USU College of Agriculture</p>
                        <p className='text-lg font-normal'>Logan, UT</p>
                    </div>
                </div>

                <div className='flex justify-center gap-16 mt-14'>
                    <div>
                        <img src={housePlaza} alt="House Monument Plaza" />
                        <p className='text-xl font-medium'>Sugar House Monument Plaza</p>
                        <p className='text-lg font-normal'>Salt Lake City, UT</p>
                    </div>
                    <div>
                        <img src={jordanLine} alt="Mid-Jordan Line" />
                        <p className='text-xl font-medium'>UTA Trax: Mid-Jordan Line</p>
                        <p className='text-lg font-normal'>Salt Lake City, UT</p>
                    </div>
                </div>

                <div className='flex justify-center gap-16 mt-14'>
                    <div>
                        <img src={laboratory} alt="Unified State Laboratory - Module 2" />
                        <p className='text-xl font-medium'>Unified State Laboratory - Module 2</p>
                        <p className='text-lg font-normal'>Salt Lake City, UT</p>
                    </div>
                    <div>
                        <img src={geophysics} alt="U of U Sutton Geology and Geophysics" />
                        <p className='text-xl font-medium w-64'>U of U Sutton Geology and Geophysics</p>
                        <p className='text-lg font-normal'>Salt Lake City, UT</p>
                    </div>
                </div>

                <div className='flex items-center justify-center gap-16 mt-14'>
                    <div>
                        <img src={twoPointFive} alt="Two point five" />
                        <h1 className='text-[56px] font-bold w-[557px] text-center'>With over 2.600 projects completed</h1>
                    </div>
                    <div>
                        <img src={Sline} alt="S-Line" />
                        <p className='text-xl font-medium w-64'>S-Lines</p>
                        <p className='text-lg font-normal'>Salt Lake City, UT</p>
                    </div>
                </div>

                <div className='flex flex-col items-center mt-14'>
                    <h1 className='text-5xl font-semibold mb-10'>Start a Project?</h1>
                    <ContactUs />
                </div>
            </div>
        </>
    )
}

export default RecentProjectsSection
