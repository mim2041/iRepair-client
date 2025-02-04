import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';



const Navbar = () => {
    return (
        <motion.header
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition= {{
                delay: 1,
            }}
            className='h-16 fixed w-full z-[999] bg-white'
        >
            <nav className='w-full max-w-[1220px] mx-auto  flex justify-between items-center h-full px-20'>
                <span className='text-3xl'>iRepair</span>
            <ul className='space-x-5'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <Button>
                    <NavLink to="\login">Login</NavLink>
                </Button>
            </ul>
            </nav>
        </motion.header>
    );
};

export default Navbar;