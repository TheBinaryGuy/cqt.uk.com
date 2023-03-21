import { Logo } from '@/components/Logo';
import Link from 'next/link';

export const Footer = () => (
    <footer className='bg-slate-50'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col-reverse items-center gap-8 border-t border-slate-400/10 py-10 md:flex-row md:justify-between'>
                <p className='text-sm text-slate-500 sm:mt-0'>
                    Copyright &copy; {new Date().getFullYear()} CQT. All rights
                    reserved.
                </p>
                <Logo className='mx-auto h-10 w-auto' />
                <div className='flex space-x-6'>
                    <Link
                        href='https://twitter.com/CQT_bbw'
                        target='_blank'
                        rel='noreferrer'
                        className='group'>
                        <span className='sr-only'>CQT on Twitter</span>
                        <svg
                            aria-hidden='true'
                            className='h-6 w-6 transition-transform group-hover:scale-125'
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'>
                            <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' />
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
                            className='h-6 w-6 transition-transform group-hover:scale-125'
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
                            <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
                            <line x1='17.5' y1='6.5' x2='17.51' y2='6.5' />
                        </svg>
                    </Link>
                    <Link
                        href='https://www.linkedin.com/company/care-quality-training/'
                        target='_blank'
                        rel='noreferrer'
                        className='group'>
                        <span className='sr-only'>CQT on LinkedIn</span>
                        <svg
                            aria-hidden='true'
                            className='h-6 w-6 transition-transform group-hover:scale-125'
                            fill='none'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            viewBox='0 0 24 24'>
                            <path d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z' />
                            <path d='M2 9H6V21H2z' />
                            <circle cx='4' cy='4' r='2' />
                        </svg>
                    </Link>
                    <Link
                        href='https://www.facebook.com/bbw.cqt/'
                        target='_blank'
                        rel='noreferrer'
                        className='group'>
                        <span className='sr-only'>CQT on Facebook</span>
                        <svg
                            aria-hidden='true'
                            className='h-6 w-6 transition-transform group-hover:scale-125'
                            fill='none'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            viewBox='0 0 24 24'>
                            <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    </footer>
);
