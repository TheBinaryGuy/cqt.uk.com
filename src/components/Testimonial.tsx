import Image, { StaticImageData } from 'next/future/image';

import { GridPattern } from '@/components/GridPattern';
import { StarRating } from '@/components/StarRating';
import React from 'react';

export const Testimonial: React.FC<{
    id: string;
    author: {
        name: string;
        image: string | StaticImageData;
        role: string;
    };
    children: React.ReactNode;
}> = ({ id, author, children }) => (
    <aside
        id={id}
        aria-labelledby={`${id}-title`}
        className='relative bg-slate-100 py-16 sm:py-32'>
        <h3 id={`${id}-title`} className='sr-only'>
            Testimonial of {author.name}
        </h3>
        <div className='text-slate-900/10'>
            <GridPattern x='50%' patternTransform='translate(0 80)' />
        </div>
        <div className='relative mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-2'>
            <figure>
                <div className='flex text-slate-900 sm:justify-center'>
                    <StarRating />
                </div>
                <blockquote className='font-display mt-10 text-2xl tracking-tight text-slate-900 sm:text-center'>
                    {children}
                </blockquote>
                <figcaption className='mt-10 flex flex-col justify-center gap-2 sm:items-center'>
                    <div className='relative flex aspect-[2/1] w-24 items-center justify-center overflow-hidden rounded-full bg-slate-200'>
                        <Image src={author.image} alt={author.name} />
                    </div>
                    <div className='sm:text-center'>
                        <div className='text-base font-medium leading-6 tracking-tight text-slate-900'>
                            {author.role}
                        </div>
                        <div className='mt-1 text-sm text-slate-600'>
                            {author.name}
                        </div>
                    </div>
                </figcaption>
            </figure>
        </div>
    </aside>
);
