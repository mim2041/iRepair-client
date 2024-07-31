import React from 'react';
import laptop from '../../assets/images/laptop2.jpg';
import { motion } from 'framer-motion';

const intro = {
    hidden : { opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            delay: 1,
            duration: 1,
            staggerChildren: 0.3,
            delayChildren: 1,
        }
    }
}

const introChild = {
    hidden: { opacity: 0,  x: -200, },
    visible: { 
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            type: 'spring',
            bounce: 0.5,
        }
     }
}

const animateLaptop = {
    hidden: { opacity: 0, x: -150 },
    visible: {
        opacity: 1,
        x: 40,
        transition: {
            duration: 0.7,
            x: {
                repeat: Infinity,
                duration: 2,
                repeatType: 'reverse',
                ease: 'easeInOut',
            }
        }
    }
}

const WhoWeAre = () => {
    return (
        <motion.div variants={intro} initial="hidden" animate="visible" className='flex items-center justify-start gap-20 max-w-7xl mt-20'>
            <motion.div variants={animateLaptop} className='md:w-1/2 relative'>
                <img src={laptop} alt="" className='w-full absolute -top-72 -left-32'/>
            </motion.div>
            <div className='md:w-1/2 text-primary-foreground'>
                <motion.h2 variants={introChild} className='text-5xl lg:text-8xl font-bold text-nowrap'>Who we are</motion.h2>
                <motion.p variants={introChild} className='mt-5'>At <span>iRepair</span> we love MacBooks on Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ratione dignissimos labore corporis quia quidem minima itaque mollitia, molestias doloribus? Eligendi fuga inventore similique ipsam, ipsa voluptatum cum sint cupiditate sapiente et fugiat. Aspernatur quibusdam accusamus ratione consequuntur voluptatibus facere cupiditate tempora quas aliquam rerum maiores autem est, <span>Bangladesh</span> nisi commodi?</motion.p>

                <motion.div variants={introChild} className='flex items-center justify-between mt-8'>
                    <div className='px-2 flex flex-col items-center'>
                        <h1 className='text-6xl text-primary '>98%</h1>
                        <p className='text-[13px]'>Successful Register</p>
                    </div>
                    <div className='px-2 flex flex-col items-center'>
                        <h1 className='text-6xl text-primary '>2k+</h1>
                        <p className='text-[13px]'>Successful Register</p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default WhoWeAre;