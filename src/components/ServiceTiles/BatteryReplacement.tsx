import { motion } from 'framer-motion';
import useScrollGrowHook from '@/hooks/ScrollGrowHook';

const BatteryReplacement = () => {
    const { style, componentRef } = useScrollGrowHook();

    return (
        <motion.div
            style={style}
            ref = {componentRef}
            className='bg-red-500 h-[415px] rounded-2xl col-span-12 '></motion.div>
    );
};

export default BatteryReplacement;