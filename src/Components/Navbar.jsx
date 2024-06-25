import React from 'react';
import logo from "../assets/Icons/Logo.png";
import { Link } from "react-router-dom";

const Navbar = ({ scrollToSection, refs }) => {

    return (
        <>
            <nav className='container mx-auto  h-24 flex  justify-between '>
                <Link to="/"><img className='mb-2' src={logo} alt="logo" /></Link>
                <ul className='flex items-center justify-between gap-8 mt-10'>
                    <li className='relative text-xl'>
                        <Link to='/' onClick={() => scrollToSection(refs.aboutRef)}>
                            <span className='absolute -top-4 left- text-xs font-semibold w-3 h-4'>1</span>
                            About
                        </Link>
                    </li>
                    <li className='relative font-normal text-xl'>
                        <button onClick={() => scrollToSection(refs.servicesRef)}>
                            <span className='absolute -top-4 left- text-xs font-semibold w-3 h-4'>2</span>
                            Services
                        </button>
                    </li>
                    <li className='relative font-normal text-xl'>
                        <button onClick={() => scrollToSection(refs.projectsRef)}>
                            <span className='absolute -top-4 left- text-xs font-semibold w-3 h-4'>3</span>
                            Projects
                        </button>
                    </li>
                    <li className='relative font-normal text-xl'>
                        <button onClick={() => scrollToSection(refs.teamRef)}>
                            <span className='absolute -top-4 left- text-xs font-semibold w-3 h-4'>4</span>
                            Team
                        </button>
                    </li>
                    <li className='relative font-normal text-xl'>
                        <button onClick={() => scrollToSection(refs.blogRef)}>
                            <span className='absolute -top-4 left- text-xs font-semibold w-3 h-4'>5</span>
                            Blog
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
