import Image from 'next/future/image';
import Link from 'next/link';

import ActiveProspects from '@/assets/images/logos/Active-Prospects.png';
import DMU from '@/assets/images/logos/De-Montfort-University.png';
import KAMPC from '@/assets/images/logos/KAM-Project-Consultants.png';
import LCC from '@/assets/images/logos/Leicestershire-County-Council.png';
import PrimeLife from '@/assets/images/logos/PrimeLife.png';
import Sutton from '@/assets/images/logos/Sutton.png';

export const Hero = () => (
    <div className='mx-auto max-w-7xl px-4 pt-20 pb-16 text-center sm:px-6 lg:px-8 lg:pt-32'>
        <h1 className='font-display mx-auto max-w-4xl text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl'>
            Small enough{' '}
            <span className='relative whitespace-nowrap text-primary'>
                <svg
                    aria-hidden='true'
                    viewBox='0 0 418 42'
                    className='absolute top-2/3 left-0 h-[0.58em] w-full fill-primary/30'
                    preserveAspectRatio='none'>
                    <path d='M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z' />
                </svg>
                <span className='relative'>to listen</span>
            </span>{' '}
            big enough to deliver.
        </h1>
        <p className='mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700'>
            Welcome to CQT, we are a well-established leading Mental Health
            training provider.
        </p>
        <div className='mt-10 flex justify-center space-x-6'>
            <Link
                className='group inline-flex items-center justify-center rounded-full bg-slate-800 py-2 px-4 text-sm font-semibold text-white hover:bg-slate-800/90 hover:text-slate-100 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800/90 active:bg-slate-800/90 active:text-blue-100'
                href='/courses'>
                Browse Courses
            </Link>
        </div>
        <div className='mt-36 lg:mt-44'>
            <p className='font-display text-base text-slate-900'>Trusted by:</p>
            <ul className='mt-8 flex items-center justify-center space-x-8 sm:flex-col sm:space-x-0 sm:space-y-10 xl:flex-row xl:space-y-0 xl:space-x-12'>
                <li>
                    <ul className='flex flex-col items-center space-y-8 sm:flex-row sm:space-y-0 sm:space-x-12'>
                        <li className='flex'>
                            <Image src={DMU} alt='De Montfort University' />
                        </li>
                        <li className='flex'>
                            <Image
                                src={LCC}
                                alt='Leicestershire County Council'
                            />
                        </li>
                        <li className='flex'>
                            <Image src={Sutton} alt='Sutton' />
                        </li>
                    </ul>
                </li>
                <li>
                    <ul className='flex flex-col items-center space-y-8 sm:flex-row sm:space-y-0 sm:space-x-12'>
                        <li className='flex'>
                            <Image src={PrimeLife} alt='PrimeLife' />
                        </li>
                        <li className='flex'>
                            <Image src={KAMPC} alt='KAM Project Consultants' />
                        </li>
                        <li className='flex'>
                            <Image
                                src={ActiveProspects}
                                alt='Active Prospects'
                            />
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
);
