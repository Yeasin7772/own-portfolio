
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import NavBar from './NavBar';

const Main = () => {
    return (
        <>
            <NavBar />
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Main;
