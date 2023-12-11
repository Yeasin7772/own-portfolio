
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import NavBar from './NavBar';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Services from '../components/Services';
// import About from '../components/About';

const Main = () => {
    return (
        <>
            <NavBar />
            <Header />
            {/* <About/> */}
            
            <Outlet />
            <Contact/>
            <Services/>
            <Projects/>
            <Footer />
        </>
    );
};

export default Main;
