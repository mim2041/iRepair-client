import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

type TContainerProps = {
    children: ReactNode;
    className?: string;
}

const Container = ({children, className} : TContainerProps) => {
    return (
        <div className={cn('w-full max-w-[1220px] mx-auto h-full px-20', className)}>
            {children}
        </div>
    );
};

export default Container;