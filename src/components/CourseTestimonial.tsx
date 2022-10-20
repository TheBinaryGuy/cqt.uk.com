import { Testimonial } from '@/schemas/sanity-types';
import Image from 'next/future/image';
import { FC } from 'react';

const CourseTestimonial: FC<{ testimonial: Testimonial }> = ({
    testimonial,
}) => (
    <div className='relative mx-auto mt-12 max-w-prose text-base lg:mt-0 lg:max-w-none'>
        <svg
            className='absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20'
            width={404}
            height={384}
            fill='none'
            viewBox='0 0 404 384'
            aria-hidden='true'>
            <defs>
                <pattern
                    id='bedc54bc-7371-44a2-a2bc-dc68d819ae60'
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits='userSpaceOnUse'>
                    <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className='text-gray-200'
                        fill='currentColor'
                    />
                </pattern>
            </defs>
            <rect
                width={404}
                height={384}
                fill='url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)'
            />
        </svg>
        <blockquote className='relative rounded-lg bg-white shadow-lg'>
            <div className='rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8'>
                <Image
                    src={testimonial.image.asset.url}
                    alt={testimonial.name ?? ''}
                    className='h-16 w-32'
                    width={128}
                    height={64}
                    blurDataURL={testimonial.image.asset.metadata.blurHash}
                />
                <div className='relative mt-8 text-lg font-medium text-gray-700'>
                    <svg
                        className='absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-gray-200'
                        fill='currentColor'
                        viewBox='0 0 32 32'
                        aria-hidden='true'>
                        <path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
                    </svg>
                    <p className='relative'>{testimonial.body}</p>
                </div>
            </div>
            <cite className='flex rounded-b-lg bg-primary py-5 px-6 not-italic'>
                <span className='relative ml-4 font-semibold leading-6 text-indigo-300'>
                    <p className='font-semibold text-white sm:inline'>
                        {testimonial.role} - {testimonial.name}
                    </p>
                </span>
            </cite>
        </blockquote>
    </div>
);

export default CourseTestimonial;
