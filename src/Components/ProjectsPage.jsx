import React from 'react';
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";


const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("https://667dbcc8297972455f6630ed.mockapi.io/Projects");
        setProjects(response.data);
      }catch(err) {
        console.log(err);
      }
    };
    fetchProjects();
  }, []);

  return (
    <>
      <div className='flex flex-col gap-4 mt-8 mx-28 w-[1200px]'>
        <h1 className='text-5xl font-semibold'>Projects</h1>
        <h3 className='text-4xl font-semibold'>Our projects are examples of attitudes rather than design</h3>
        <p className='text-xl font-normal'>They are samples in a series of contextual examination rather than isolated masterpieces. They are associative rather than symbolic. They are comments rather than statements. Every story told is a shared experience of contemporary conditions set within a given frame.</p>
      </div>
      <div className='flex justify-between gap-42 mt-14 border-t-2 border-black mx-8'>
        <div className='mx-28 mt-20'>
          <ul className="text-2xl font-medium flex flex-col gap-16">
            <li>All project</li>
            <li>Architecture</li>
            <li>Landscape</li>
            <li>Interior</li>
            <li>Design</li>
          </ul>
        </div>

        <div className='flex flex-wrap gap-16 mt-20'>
          {
            projects.map((project) => (
              <div key={project.id}>
                <Link to={`/projects/${encodeURIComponent(project.name)}`}>
                  <img src={`../src/assets/Images/${project.img}`}  alt={project.name}/>
                </Link>
                <p>{project.year}</p>
                <p className='text-xl font-medium'>{project.name}</p>
                <p className='text-lg font-normal'>{project.state}</p>
              </div>
            ))
          }
        </div>
        <div>

        </div>
      </div>
    </>
  )
}

export default ProjectsPage
