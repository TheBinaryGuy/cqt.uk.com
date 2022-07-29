import authorImage from '@/assets/images/bbw.jpg';
import { GridPattern } from '@/components/GridPattern';
import Image from 'next/future/image';
import Link from 'next/link';

const About = () => (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <section
            id='about'
            aria-labelledby='about-title'
            className='scroll-mt-14 py-16 sm:scroll-mt-16 sm:py-20'>
            <div className='mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12'>
                <h2
                    id='about-title'
                    className='font-display text-center text-4xl font-bold text-slate-900'>
                    About
                </h2>
            </div>
            <p className='prose prose-lg mx-auto mt-16'>
                We are an established training company bringing together 30
                years of experience and expertise from our Professional Mental
                Health Associates who are supporting people of all ages with a
                range of mental health problems. We provide a wide range of
                effective and stimulating bespoke evidence-based mental health
                training courses which are all rigorously assessed and given the
                seal of approval by achieving a{' '}
                <Link
                    href='http://skillsforcare.org.uk/'
                    target='_blank'
                    rel='noreferrer'
                    className='text-blue-600'>
                    Skills for Care
                </Link>{' '}
                Endorsement.
            </p>
        </section>
        <section
            id='author'
            aria-labelledby='author-title'
            className='relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16'>
            <div className='absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]'>
                <GridPattern x='50%' y='100%' />
            </div>
            <div className='relative mx-auto max-w-5xl pt-16 sm:px-6'>
                <div className='sm:rounded-6xl bg-slate-50 pt-px'>
                    <div className='relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72'>
                        <Image src={authorImage} alt='Brian Bowlay-Williams' />
                    </div>
                    <div className='px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32'>
                        <p className='font-display mt-8 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl'>
                            <span className='block text-blue-600'>
                                Brian Bowlay Williams -
                            </span>{' '}
                            Director at CQT and a Specialist Advisor for the
                            CQC.
                        </p>
                        <p className='mt-4 text-lg tracking-tight text-slate-700'>
                            As Director of CQT my vision is to help eradicate
                            the stigma that surrounds mental illness by
                            delivering Mental Health First Aid training packages
                            that will help employers identify and support
                            employees who may have a mental health problem.
                        </p>
                        <p className='mt-8'>
                            <a
                                href='#'
                                className='inline-flex items-center text-base font-medium tracking-tight text-blue-600'>
                                <svg
                                    aria-hidden='true'
                                    className='h-10 w-10 fill-current'>
                                    <path d='M13.817 33.753c12.579 0 19.459-10.422 19.459-19.458 0-.297 0-.592-.02-.884a13.913 13.913 0 0 0 3.411-3.543 13.65 13.65 0 0 1-3.928 1.077 6.864 6.864 0 0 0 3.007-3.784 13.707 13.707 0 0 1-4.342 1.66 6.845 6.845 0 0 0-11.655 6.239A19.417 19.417 0 0 1 5.654 7.915a6.843 6.843 0 0 0 2.117 9.128 6.786 6.786 0 0 1-3.104-.853v.086a6.842 6.842 0 0 0 5.487 6.704 6.825 6.825 0 0 1-3.088.116 6.847 6.847 0 0 0 6.39 4.75A13.721 13.721 0 0 1 3.334 30.68a19.36 19.36 0 0 0 10.483 3.066' />
                                </svg>
                                <span className='ml-4'>Follow on Twitter</span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

About.pageTitle = 'About';

export default About;
