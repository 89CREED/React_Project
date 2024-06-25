import React from 'react'
import { useEffect } from 'react';

const ProjectsPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='flex flex-col gap-4 mt-8 mx-28 w-[1200px]'>
        <h1 className='text-5xl font-semibold'>Projects</h1>
        <h3 className='text-4xl font-semibold'>Our projects are examples of attitudes rather than design</h3>
        <p className='text-xl font-normal'>They are samples in a series of contextual examination rather than isolated masterpieces. They are associative rather than symbolic. They are comments rather than statements. Every story told is a shared experience of contemporary conditions set within a given frame.</p>
      </div>
      <div className='flex items-center justify-between'>
        <div>
          <ul>
            <li>All project</li>
            <li>Architecture</li>
            <li>Landscape</li>
            <li>Interior</li>
            <li>Design</li>
          </ul>
        </div>
        <div>

        </div>
      </div>
    </>
  )
}

export default ProjectsPage
