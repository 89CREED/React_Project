import React from 'react'
import { useEffect } from 'react'

import union from '../assets/Icons/Union.png';
import team from '../assets/Images/Team.png';
import ourHistory from '../assets/Images/OurHistory.png';

import arrowUp from "../assets/Icons/arrow-up-right.png";

const History = ({scrollToSection}) => {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <>
      <div className='mx-8 mt-6'>
        <div>
          <div className='mt-8 ml-20'>
            <h1 className='text-5xl font-semibold'>Who we are</h1>
          </div>
          <div className='flex justify-center gap-16 mt-4'>
            <img src={team} alt="team"/>
            <div>
              <p className='w-[450px] text-xl font-normal'>We are dedicated individuals from a range of different countries. Based in Oslo, with offices in Copenhagen, London and Reykjavik,
                we are actively involved in projects in various countries across Europe, Africa, the Middle East and Asia.<br /><br />
                Together, we are a community with a culture for beautiful and outstanding architecture, a culture that is Powered by Commitment.
              </p>
              <h1 className='text-5xl w-[450px] mt-6'>Do you want to work with us?</h1>
              <div className='flex flex-row mt-6'>
                <button className='bg-black text-white w-44 h-12'>Our Vacancies</button>
                <img className='p-2 border-4 border-black' src={arrowUp} alt="arrow-up" />
              </div>
            </div>
          </div>
        </div>

        <div className='our_history_section flex flex-col justify-center px-20'>
          <h1 className='text-5xl font-semibold mt-10'>Our history</h1>
          <img src={ourHistory} alt="Our History" className='mt-4'/>
          <p className='text-xl font-normal mt-4'>For over four decades, ARK House, founded by renowned architect John Smith in 1975, has been a leader in the industry known for its innovative designs and commitment to client satisfaction. The agency's early work, including the Smith Tower in Seattle, established Smith's reputation as a leading architect. Over the years, ARK House has completed numerous high-profile projects, including the iconic Guggenheim Museum in Bilbao, Spain. The agency's success is due to its commitment to sustainability and community engagement, as well as its adaptation to new trends and technologies. Today, ARK House continues to push boundaries in architecture while setting new standards for innovation and excellence.</p>
        </div>

      </div>
    </>
  )
}

export default History
