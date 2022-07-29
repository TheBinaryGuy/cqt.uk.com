import { Logo } from '@/components/Logo';
import Link from 'next/link';

export const Footer = () => (
    <footer className='bg-slate-50'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='py-16'>
                <Logo className='mx-auto h-10 w-auto' />
                <nav className='mt-10 text-sm' aria-label='quick links'>
                    <ul className='-my-1 flex justify-center space-x-6'>
                        <li>
                            <Link
                                href='/courses'
                                className='rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900'>
                                Courses
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='/testimonials'
                                className='rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900'>
                                Testimonials
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='/about'
                                className='rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900'>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='/about'
                                className='rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between'>
                <div className='flex space-x-6'>
                    <Link
                        href='https://twitter.com/CQT_bbw'
                        target='_blank'
                        rel='noreferrer'
                        className='group'>
                        <span className='sr-only'>CQT on Twitter</span>
                        <svg
                            aria-hidden='true'
                            className='h-6 w-6 group-hover:fill-slate-700'
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'>
                            <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z'></path>
                        </svg>
                    </Link>
                    <Link
                        href='https://www.instagram.com/carequalitytraining/'
                        target='_blank'
                        rel='noreferrer'
                        className='group'>
                        <span className='sr-only'>CQT on Instagram</span>
                        <svg
                            aria-hidden='true'
                            className='h-6 w-6 group-hover:fill-slate-700'
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'>
                            <rect
                                x='2'
                                y='2'
                                width='20'
                                height='20'
                                rx='5'
                                ry='5'></rect>
                            <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
                            <line x1='17.5' y1='6.5' x2='17.51' y2='6.5'></line>
                        </svg>
                    </Link>
                </div>
                <p className='mt-6 text-sm text-slate-500 sm:mt-0'>
                    Copyright &copy; {new Date().getFullYear()} CQT. All rights
                    reserved.
                </p>
            </div>
        </div>
    </footer>
);
