import { MailIcon, PhoneIcon } from '@heroicons/react/outline';
import Link from 'next/link';

const Contact = () => (
    <div className='bg-gray-100'>
        <div className='mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
            <div className='relative bg-white shadow-xl'>
                <h2 className='sr-only'>Contact us</h2>

                <div className='grid grid-cols-1 lg:grid-cols-3'>
                    {/* Contact information */}
                    <div className='relative overflow-hidden bg-primary py-10 px-6 sm:px-10 xl:p-12'>
                        <div
                            className='pointer-events-none absolute inset-0 sm:hidden'
                            aria-hidden='true'>
                            <svg
                                className='absolute inset-0 h-full w-full'
                                width={343}
                                height={388}
                                viewBox='0 0 343 388'
                                fill='none'
                                preserveAspectRatio='xMidYMid slice'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z'
                                    fill='url(#linear1)'
                                    fillOpacity='.1'
                                />
                                <defs>
                                    <linearGradient
                                        id='linear1'
                                        x1='254.553'
                                        y1='107.554'
                                        x2='961.66'
                                        y2='814.66'
                                        gradientUnits='userSpaceOnUse'>
                                        <stop stopColor='#fff' />
                                        <stop
                                            offset={1}
                                            stopColor='#fff'
                                            stopOpacity={0}
                                        />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div
                            className='pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden'
                            aria-hidden='true'>
                            <svg
                                className='absolute inset-0 h-full w-full'
                                width={359}
                                height={339}
                                viewBox='0 0 359 339'
                                fill='none'
                                preserveAspectRatio='xMidYMid slice'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z'
                                    fill='url(#linear2)'
                                    fillOpacity='.1'
                                />
                                <defs>
                                    <linearGradient
                                        id='linear2'
                                        x1='192.553'
                                        y1='28.553'
                                        x2='899.66'
                                        y2='735.66'
                                        gradientUnits='userSpaceOnUse'>
                                        <stop stopColor='#fff' />
                                        <stop
                                            offset={1}
                                            stopColor='#fff'
                                            stopOpacity={0}
                                        />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div
                            className='pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block'
                            aria-hidden='true'>
                            <svg
                                className='absolute inset-0 h-full w-full'
                                width={160}
                                height={678}
                                viewBox='0 0 160 678'
                                fill='none'
                                preserveAspectRatio='xMidYMid slice'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z'
                                    fill='url(#linear3)'
                                    fillOpacity='.1'
                                />
                                <defs>
                                    <linearGradient
                                        id='linear3'
                                        x1='192.553'
                                        y1='325.553'
                                        x2='899.66'
                                        y2='1032.66'
                                        gradientUnits='userSpaceOnUse'>
                                        <stop stopColor='#fff' />
                                        <stop
                                            offset={1}
                                            stopColor='#fff'
                                            stopOpacity={0}
                                        />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <h3 className='text-lg font-medium text-white'>
                            Contact information
                        </h3>
                        <p className='mt-6 max-w-3xl text-base text-indigo-50'>
                            Business Hours <br />
                            Monday - Saturday (8am - 6pm) <br />
                            Sunday (Closed)
                        </p>
                        <dl className='mt-8 space-y-6'>
                            <dt>
                                <span className='sr-only'>Phone number</span>
                            </dt>
                            <dd className='flex text-base text-indigo-50'>
                                <PhoneIcon
                                    className='h-6 w-6 flex-shrink-0 text-indigo-200'
                                    aria-hidden='true'
                                />
                                <span className='ml-3'>
                                    <Link href='tel:0116 279 5163'>
                                        0116 279 5163
                                    </Link>
                                </span>
                            </dd>
                            <dt>
                                <span className='sr-only'>Email</span>
                            </dt>
                            <dd className='flex text-base text-indigo-50'>
                                <MailIcon
                                    className='h-6 w-6 flex-shrink-0 text-indigo-200'
                                    aria-hidden='true'
                                />
                                <span className='ml-3'>
                                    <Link href='mailto:bbw@cqt.uk.com'>
                                        bbw@cqt.uk.com
                                    </Link>
                                </span>
                            </dd>
                        </dl>
                        <ul role='list' className='mt-8 flex space-x-12'>
                            <li>
                                <Link
                                    href='https://www.instagram.com/carequalitytraining/'
                                    target='_blank'
                                    rel='noreferrer'
                                    className='text-indigo-200 hover:text-indigo-100'>
                                    <span className='sr-only'>Instagram</span>
                                    <svg
                                        aria-hidden='true'
                                        className='h-6 w-6'
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
                                        <line
                                            x1='17.5'
                                            y1='6.5'
                                            x2='17.51'
                                            y2='6.5'></line>
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className='text-indigo-200 hover:text-indigo-100'
                                    href='https://twitter.com/CQT_bbw'
                                    target='_blank'
                                    rel='noreferrer'>
                                    <span className='sr-only'>Twitter</span>
                                    <svg
                                        width={24}
                                        height={24}
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='h-6 w-6'
                                        aria-hidden='true'>
                                        <path
                                            d='M7.548 22.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0024 5.305a9.828 9.828 0 01-2.828.776 4.94 4.94 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.929 4.929 0 00-8.391 4.491A13.98 13.98 0 011.67 3.9a4.928 4.928 0 001.525 6.573A4.887 4.887 0 01.96 9.855v.063a4.926 4.926 0 003.95 4.827 4.917 4.917 0 01-2.223.084 4.93 4.93 0 004.6 3.42A9.88 9.88 0 010 20.289a13.941 13.941 0 007.548 2.209'
                                            fill='currentColor'
                                        />
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact form */}
                    <div className='py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12'>
                        <h3 className='text-lg font-medium text-gray-900'>
                            Send us a message
                        </h3>
                        <form
                            onClick={e => e.preventDefault()}
                            className='mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'>
                            <div className='sm:col-span-2'>
                                <label
                                    htmlFor='name'
                                    className='block text-sm font-medium text-gray-900'>
                                    Name
                                </label>
                                <div className='mt-1'>
                                    <input
                                        type='text'
                                        name='name'
                                        id='name'
                                        autoComplete='name'
                                        className='block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-primary/90 focus:ring-primary/90'
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor='email'
                                    className='block text-sm font-medium text-gray-900'>
                                    Email
                                </label>
                                <div className='mt-1'>
                                    <input
                                        id='email'
                                        name='email'
                                        type='email'
                                        autoComplete='email'
                                        className='block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-primary/90 focus:ring-primary/90'
                                    />
                                </div>
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <label
                                        htmlFor='phone'
                                        className='block text-sm font-medium text-gray-900'>
                                        Phone
                                    </label>
                                    <span
                                        id='phone-optional'
                                        className='text-sm text-gray-500'>
                                        Optional
                                    </span>
                                </div>
                                <div className='mt-1'>
                                    <input
                                        type='text'
                                        name='phone'
                                        id='phone'
                                        autoComplete='tel'
                                        className='block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-primary/90 focus:ring-primary/90'
                                        aria-describedby='phone-optional'
                                    />
                                </div>
                            </div>
                            <div className='sm:col-span-2'>
                                <label
                                    htmlFor='subject'
                                    className='block text-sm font-medium text-gray-900'>
                                    Subject
                                </label>
                                <div className='mt-1'>
                                    <input
                                        type='text'
                                        name='subject'
                                        id='subject'
                                        className='block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-primary/90 focus:ring-primary/90'
                                    />
                                </div>
                            </div>
                            <div className='sm:col-span-2'>
                                <div className='flex justify-between'>
                                    <label
                                        htmlFor='message'
                                        className='block text-sm font-medium text-gray-900'>
                                        Message
                                    </label>
                                    <span
                                        id='message-max'
                                        className='text-sm text-gray-500'>
                                        Max. 500 characters
                                    </span>
                                </div>
                                <div className='mt-1'>
                                    <textarea
                                        id='message'
                                        name='message'
                                        rows={4}
                                        className='block w-full rounded-md border border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-primary/90 focus:ring-primary/90'
                                        aria-describedby='message-max'
                                        defaultValue={''}
                                    />
                                </div>
                            </div>
                            <div className='sm:col-span-2 sm:flex sm:justify-end'>
                                <button
                                    type='submit'
                                    className='mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/90 focus:ring-offset-2 sm:w-auto'>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Contact;
