import React from 'react'

import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import OurTeamSection from './OurTeamSection';
import BlogSection from './BlogSection';
import RecentProjectsSection from './RecentProjectsSection';


const HomePage = ({refs}) => {

    return (
        <>
            <HeroSection />
            <div ref={refs.aboutRef}><AboutSection /></div>
            <div ref={refs.servicesRef}><ServicesSection /></div>
            <div ref={refs.projectsRef}><RecentProjectsSection /></div>
            <div ref={refs.teamRef}><OurTeamSection /></div>
            <div ref={refs.blogRef}><BlogSection /></div>
        </>
    )
}

export default HomePage
