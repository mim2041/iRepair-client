import Container from '@/components/Container';
import BatteryReplacement from '@/components/ServiceTiles/BatteryReplacement';
import ChipReplacement from '@/components/ServiceTiles/ChipReplacement';
import DataRecovery from '@/components/ServiceTiles/DataRecovery';
import React from 'react';

const ServicesSection = () => {
    return (
        <Container className='my-40'>
            <div className='flex flex-col justify-center items-center text-center'>
                <h1>Services that we provide</h1>
                <p className='max-w-[80ch] mt-10 mb-20'>
                    All our technicians are fully qualified and licensed. Moreover, they are completely trained to fix any kind of issue with your Macbook. We provide a wide range of services including:
                </p>
            </div>
            <div className='grid grid-cols-12 gap-[19px]'>
                <BatteryReplacement />
                <ChipReplacement />
                <DataRecovery />
                <div className='bg-red-500 h-[415px] rounded-2xl col-span-12 '></div>
                <div className='bg-red-500 h-[415px] rounded-2xl col-span-12 md:col-span-6 lg:col-span-4 '></div>
                <div className='bg-red-500 h-[415px] rounded-2xl col-span-12 md:col-span-6 lg:col-span-4 '></div>
                <div className='bg-red-500 h-[415px] rounded-2xl col-span-12 md:col-span-12 lg:col-span-4 '></div>
                
            </div>
        </Container>
    );
};

export default ServicesSection;