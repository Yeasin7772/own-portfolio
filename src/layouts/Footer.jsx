import React from 'react';
import { AiFillGithub } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (

        <footer className="footer p-10 bg-slate-800  text-white  ">
            <nav >
                <header className="text-[48px] font-semibold mb-8 leading-normal uppercase text-teal-500">Yeasin</header>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Nulla maiores
                    voluptate hic quod consectetur voluptates nesciunt. <br />Obcaecati quo ab sapiente.</p>
            </nav>
            <nav>
                <header className="text-2xl font-semibold mb-8 leading-normal uppercase text-teal-500">SERVICES</header>
                <a className="link link-hover">Web Design</a>
                <a className="link link-hover">Web Development</a>

            </nav>
            <nav>
                <header className="text-2xl font-semibold mb-8 leading-normal uppercase text-teal-500">CONTACT</header>
                <a className="link link-hover">Email: youremail.gmail.com</a>
                <a className="link link-hover">Phone: +1 113-456-7890</a>

            </nav>
            <nav>
                <header className="text-2xl font-semibold mb-8 leading-normal uppercase text-teal-500">FOLLOW ME</header>
                <div className="grid grid-flow-col gap-4">
                    <div className="flex space-x-2">
                        <a href="" className="text-teal-600 hover:text-fuchsia-500 rounded-full glow p-2">
                            <AiFillGithub className="text-[28px]" />
                        </a>
                        <a href="" className="text-teal-600 hover:text-teal-500 rounded-full glow p-2">
                            <FaLinkedinIn className="text-[28px]" />
                        </a>
                        <a href="" className="text-teal-600 hover:text-teal-500 rounded-full glow p-2">
                            <FaFacebook className="text-[28px]" />
                        </a>
                       
                        <a href="" className="text-teal-600 hover:text-teal-500 rounded-full glow p-2">
                            <FaInstagram className="text-[28px]" />
                        </a>

                    </div>
                </div>
            </nav>
        </footer>

    );
};

export default Footer;
