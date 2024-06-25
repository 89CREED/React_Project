import React, { useRef, useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import History from './Components/History';
import ProjectsPage from './Components/ProjectsPage';
import ProjectPage from './Components/ProjectPage';
import ContactPageNumber from './Components/ContactPageNumber';
import ContactPageEmail from './Components/ContactPageEmail';
import Breadcrumbs from './Components/Breadcrumbs';


const App = () => {

  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const teamRef = useRef(null);
  const blogRef = useRef(null);
  const location = useLocation();
  const showBreadCrumbs = location.pathname !== '/';

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }



  return (
    <>
      <Navbar
        scrollToSection={scrollToSection}
        refs={{ aboutRef, servicesRef, projectsRef, teamRef, blogRef }}

      />

      {showBreadCrumbs && <Breadcrumbs />}

      <Routes>
        <Route path="/" element={<HomePage
          refs={{ aboutRef, servicesRef, projectsRef, teamRef, blogRef }}
          scrollToSection={scrollToSection}
        />} />
        <Route path="/history" element={<History />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/contactNumber" element={<ContactPageNumber />} />
        <Route path="/contactEmail" element={<ContactPageEmail />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
