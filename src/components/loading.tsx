import { useNProgress } from '@tanem/react-nprogress';
import React from 'react';

const Loading: React.FC<{ isRouteChanging: boolean }> = ({
    isRouteChanging,
}) => {
    const { animationDuration, isFinished, progress } = useNProgress({
        isAnimating: isRouteChanging,
    });

    return (
        <div
            className={`${
                isFinished ? 'opacity-0' : 'opacity-100'
            } pointer-events-none transition ease-linear`}
            style={{
                transitionDuration: `${animationDuration}ms`,
            }}>
            <div
                className='fixed left-0 top-0 z-50 h-[2px] w-full bg-accent transition-all ease-linear'
                style={{
                    transitionDuration: `${animationDuration}ms`,
                }}>
                <div className='absolute right-0 block h-full w-full -translate-y-[4px] rotate-3 opacity-100 shadow-md' />
            </div>
        </div>
    );
};

export default Loading;
