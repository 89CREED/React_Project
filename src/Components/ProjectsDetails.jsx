import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../Data/projectsData.json';
import ContactUs from './ContactUs';
import DevelopmentTeamSection from './DevelopmentTeamSection';


const ProjectDetails = () => {
  const { projectName } = useParams();
  const decodedProjectName = decodeURIComponent(projectName);
  const project = projectsData[decodedProjectName];

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <> 
      <div className='flex flex-col gap-4 mt-8 mx-28'>
        <h1 className='text-5xl font-semibold'>{project.name}</h1>
        <div className='flex justify-between'>
          <img src={`../assets/Images/${project.gallery[0].src}`} alt={project.name} />
          {console.log(`Calea imaginii ${project.name}: ../assets/Images/${project.gallery[0].src}`)}
          <div>
            <h2 className='text-xl font-medium'>LOCATION</h2>
            <p className='text-xl font-normal mt-2'>{project.location}</p>
            <br />
            <h2 className='text-xl font-medium'>AREA</h2>
            <p className='text-xl font-normal mt-2'>{project.area}</p>
            <br />
            <h2 className='text-xl font-medium'>CONSTRUCTION COST</h2>
            <p className='text-xl font-normal mt-2'>{project.constructionCost}</p>
          </div>
          <div>
            <h2 className='text-xl font-medium'>YEAR</h2>
            <p className='text-xl font-normal mt-2'>{project.year}</p>
            <br />
            <h2 className='text-xl font-medium'>CLIENT</h2>
            <p className='text-xl font-normal mt-2'>{project.client}</p>
          </div>
        </div>
        <p className='text-xl font-normal'>{project.description}</p>
      </div>
      <div>
        <div className='flex justify-between mx-28 mt-28 '>
          <h1 className='text-5xl font-semibold'>Gallery</h1>
          <ContactUs />
        </div>
        <div className='flex justify-evenly mx-8 mt-10 border-t-2 border-black'>
          {project.gallery.map((image, index) => (
            <div key={index} className='mt-10'>
              <img src={`../assets/Images/${image.src}`} alt={image.title} />
              <p className='text-xl font-medium'>{image.title}</p>
              <p className='text-lg font-normal'>{image.location}</p>
              {console.log(`Calea imaginii ${image.title}: ../assets/Images/${image.src}`)}
            </div>
          ))}
        </div>
      </div>
      <DevelopmentTeamSection />
    </>
  );
};

export default ProjectDetails;
