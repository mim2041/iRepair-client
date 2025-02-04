import { useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

const useScrollGrowHook = () => {
    const componentRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: componentRef,
        offset: ['0 1', '1.2 1']
    });

    const scaleValues = useTransform( scrollYProgress, [0,1], [0.9, 1]);
    const opacityValues = useTransform( scrollYProgress, [0,1], [0.1, 1]);
    const xValues = useTransform( scrollYProgress, [0,1], [-1000, 0]);

    const style = {
                scale: scaleValues,
                opacity: opacityValues,x: xValues
            }

    return { componentRef, style };
};

export default useScrollGrowHook;