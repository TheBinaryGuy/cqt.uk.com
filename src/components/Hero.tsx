import Image from 'next/future/image';
import Link from 'next/link';

import ActiveProspects from '@/assets/images/logos/Active-Prospects.png';
import DMU from '@/assets/images/logos/De-Montfort-University.png';
import KAMPC from '@/assets/images/logos/KAM-Project-Consultants.png';
import LCC from '@/assets/images/logos/Leicestershire-County-Council.png';
import PrimeLife from '@/assets/images/logos/PrimeLife.png';
import Sutton from '@/assets/images/logos/Sutton.png';

export const Hero = () => (
    <div className='mx-auto max-w-7xl px-4 pt-10 pb-16 text-center sm:px-6 sm:pt-20 lg:px-8'>
        <p className='mx-auto max-w-2xl text-lg leading-relaxed tracking-tight text-slate-700 sm:text-2xl'>
            We are a leading specialist Mental Health training provider
            supporting organisations with regulated Mental Health First Aid
            training and qualifications as well as providing a range of Adult
            and Children&apos;s Mental Health courses.
        </p>
        <div className='mt-10 flex justify-center space-x-6'>
            <Link
                className='group inline-flex items-center justify-center rounded-full bg-slate-800 py-2 px-4 text-sm font-semibold text-white hover:bg-slate-800/90 hover:text-slate-100 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800/90 active:bg-slate-800/90 active:text-blue-100'
                href='/courses'>
                Browse Courses
            </Link>
            <Link
                className='group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm text-slate-700 ring-1 ring-slate-200 hover:text-slate-900 hover:ring-slate-300 focus:outline-none focus-visible:outline-blue-600 focus-visible:ring-slate-300 active:bg-slate-100 active:text-slate-600'
                href='/contact'>
                Contact Us
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
