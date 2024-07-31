import Container from '@/components/Container';
import { Button } from '@/components/ui/button';
import macbook from '../../assets/images/macbook.jpg';
import { delay, motion } from 'framer-motion';

const intro = {
    hidden: { opacity : 0},
    visible : {
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.3,
            delayChildren: 1,
        }
    }
}

const introChildren = {
    hidden: { opacity : 0, y: -200 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: 'spring', bounce: 0.5 } }
}

const laptop = {
    initial : { y: 0, rotate: 0, scale: 5 },
    animate: {
        y: 50,
        rotate: -30,
        scale: 1,
        transition: {
            duration: 1,
            y: {
                repeat: Infinity,
                duration: 2,
                repeatType: "reverse",
                ease: 'easeInOut'
            }
        }
    }
}

const HeroSection = () => {
    return (
        <div className='overflow-hidden'>
            <Container className='h-screen grid grid-cols-1 md:grid-cols-2 place-content-center gap-10 pt-16'>
            <motion.div
                variants={intro}
                initial='hidden'
                animate='visible'
            >
                <motion.h2 variants={introChildren} className='text-5xl lg:text-8xl font-bold text-nowrap'>
                    <span className='text-gray'>Don't worry.</span>
                    <br />
                    <span>We'll fix it.</span>
                </motion.h2>
                <motion.p variants={introChildren} className='text-dark-gray max-w-[50ch] mt-10 mb-5 text-lg'>Welcome to {' '} 
                    <span className='text-primary-foreground font-semibold'>iRepair</span>{' '}, 
                    your one-stop place for all kinds of {' '}
                    <span className='text-primary-foreground font-semibold'>Macbook repairs</span> and diagnostics.</motion.p>
                <motion.div variants={introChildren}>
                    <Button>Book a service</Button>
                </motion.div>
            </motion.div>
            <motion.div variants={laptop} initial="initial" animate="animate" className='mt-10 w-3/4 lg:w-full mx-auto'>
                <img className=' object-content' src={macbook} alt="" />
            </motion.div>
        </Container>
        </div>
    );
};

export default HeroSection;