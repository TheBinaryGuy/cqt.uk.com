import Sutton from '@/assets/images/logos/Sutton.png';
import appData from '@/data/appData';
import Image from 'next/future/image';
import Link from 'next/link';

const MentalWellbeingVision = () => (
    <div className='overflow-hidden bg-gray-50 py-16'>
        <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8'>
            <div className='mx-auto max-w-prose text-base lg:max-w-none'>
                <h2 className='text-base font-semibold uppercase tracking-wide text-primary'>
                    Mental Health Training Course
                </h2>
                <p className='mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
                    Mental Wellbeing Vision
                </p>
            </div>
            <div className='relative z-10 mx-auto max-w-prose text-base lg:mx-0 lg:max-w-5xl lg:pr-72'>
                <p className='text-lg'>
                    Our vision is to promote mental health in a positive light
                    and to help eradicate the stigma that surrounds mental
                    illness.
                </p>
            </div>
            <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-8'>
                <div className='relative z-10'>
                    <div className='prose prose-indigo mx-auto lg:max-w-none'>
                        <p>
                            Our Mental Health Awareness and First Aid for Mental
                            Health courses help to create a positive wellbeing
                            culture in the workplace and community where people
                            are confident to identify, talk openly about their
                            mental health problems and seek support and guidance
                            when it was most needed. The First Aid for Mental
                            Health courses enables people to recognise the signs
                            of mental health problems, be non-judgemental in
                            their approach, start a conversation with their
                            colleagues and signpost to a professional for help
                            if needed.
                        </p>
                        <p>
                            We believe that the mental health needs of all
                            individuals should be treated with equal importance
                            and be supported in the same way people do about
                            their physical health needs. All too often people
                            living with mental health problems still experience
                            stigma and discrimination, many people struggle to
                            get the right help at the right time.
                        </p>
                        <p>
                            Our new Adult one and two-day regulated courses are
                            Level 2 and Level 3 qualifications, from awarding
                            organisation RQF meaning they are nationally
                            recognised qualifications. All qualifications are
                            valid for three years from the date of achievement.
                            Participants must be aged 16 or older to attend this
                            course.
                        </p>
                        <h3>Assessments:</h3>
                        <h4 className='text-gray-600'>
                            To be awarded the Level 2 qualification, all
                            participants must pass the below assessments:
                        </h4>
                        <ul role='list'>
                            <li>One multiple-choice question paper.</li>
                            <li>A practical assessment.</li>
                        </ul>
                        <h4 className='text-gray-600'>
                            To be awarded the Level 3 qualification, all
                            delegates must pass the below assessments:
                        </h4>
                        <ul role='list'>
                            <li>Two multiple-choice question papers.</li>
                            <li>A practical assessment.</li>
                        </ul>
                        <h3>Certification:</h3>
                        <p>
                            All candidates will be awarded the relevant level
                            Ofqual regulated RQF/SCQF qualification based on the
                            course they have completed and upon the completion
                            of a short written assessment.
                        </p>
                    </div>
                    <div className='mx-auto mt-10 flex max-w-prose text-base lg:max-w-none'>
                        <div className='rounded-md shadow'>
                            <Link
                                href={appData.globalCTA}
                                target='_blank'
                                rel='noreferrer'
                                className='flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-5 py-3 text-base font-medium text-white hover:bg-primary/90'>
                                Book This Course
                            </Link>
                        </div>
                        <div className='ml-4 rounded-md shadow'>
                            <Link
                                href='/contact'
                                className='flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-primary hover:bg-gray-50'>
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
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
                                src={Sutton}
                                alt='London Borough Sutton Council'
                                className='h-16 w-32'
                            />
                            <div className='relative mt-8 text-lg font-medium text-gray-700'>
                                <svg
                                    className='absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-gray-200'
                                    fill='currentColor'
                                    viewBox='0 0 32 32'
                                    aria-hidden='true'>
                                    <path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
                                </svg>
                                <p className='relative'>
                                    I work with children aged between 11 and 18.
                                    It will definitely help support my role when
                                    I meet with troubled children on a daily
                                    basis. I will use strategies with young
                                    people. Very Helpful and Educational.
                                </p>
                            </div>
                        </div>
                        <cite className='flex rounded-b-lg bg-primary py-5 px-6 not-italic'>
                            <span className='relative ml-4 font-semibold leading-6 text-indigo-300'>
                                <p className='font-semibold text-white sm:inline'>
                                    London Borough Sutton Council
                                </p>
                            </span>
                        </cite>
                    </blockquote>
                </div>
            </div>
        </div>
    </div>
);

MentalWellbeingVision.pageTitle = 'Mental Wellbeing Vision';

export default MentalWellbeingVision;
