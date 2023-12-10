
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import NavBar from './NavBar';
// import About from '../components/About';

const Main = () => {
    return (
        <>
            <NavBar />
            <Header />
            {/* <About/> */}
            <Outlet />
            <Footer />
        </>
    );
};

export default Main;
