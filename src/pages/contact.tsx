import { contactSchema } from '@/schemas/contact';
import { MailIcon, PhoneIcon, RefreshIcon } from '@heroicons/react/outline';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<z.infer<typeof contactSchema>>({
        resolver: zodResolver(contactSchema),
    });

    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const onSubmit = async (data: z.infer<typeof contactSchema>) => {
        try {
            setSubmitting(true);
            setError(null);

            await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        } catch {
            setError('Error submitting the form. Please try again later.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className='bg-gray-100 selection:bg-black'>
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
                            <p className='mt-6 max-w-3xl text-base text-indigo-50'>
                                Address <br />
                                Business Box, Oswin Road, <br />
                                Braunstone, Leicester, LE3 1HR
                            </p>
                            <dl className='mt-8 space-y-6'>
                                <dt>
                                    <span className='sr-only'>
                                        Phone number
                                    </span>
                                </dt>
                                <dd className='space-y-2 text-base text-indigo-50'>
                                    <div className='flex'>
                                        <PhoneIcon
                                            className='h-6 w-6 flex-shrink-0 text-indigo-200'
                                            aria-hidden='true'
                                        />
                                        <span className='ml-3'>
                                            <Link href='tel:0116 279 5163'>
                                                0116 279 5163
                                            </Link>
                                        </span>
                                    </div>
                                    <div className='flex'>
                                        <PhoneIcon
                                            className='h-6 w-6 flex-shrink-0 text-indigo-200'
                                            aria-hidden='true'
                                        />
                                        <span className='ml-3'>
                                            <Link href='tel:07543 879 415'>
                                                07543 879 415
                                            </Link>
                                        </span>
                                    </div>
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
                                        className='group text-indigo-200'>
                                        <span className='sr-only'>
                                            CQT on Instagram
                                        </span>
                                        <svg
                                            aria-hidden='true'
                                            className='h-6 w-6 transition-transform group-hover:scale-125'
                                            xmlns='http://www.w3.org/2000/svg'
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
                                                ry='5'
                                            />
                                            <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
                                            <line
                                                x1='17.5'
                                                y1='6.5'
                                                x2='17.51'
                                                y2='6.5'
                                            />
                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='group text-indigo-200'
                                        href='https://twitter.com/CQT_bbw'
                                        target='_blank'
                                        rel='noreferrer'>
                                        <span className='sr-only'>
                                            CQT on Twitter
                                        </span>
                                        <svg
                                            aria-hidden='true'
                                            className='h-6 w-6 transition-transform group-hover:scale-125'
                                            fill='none'
                                            stroke='currentColor'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='2'
                                            viewBox='0 0 24 24'>
                                            <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' />
                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='group text-indigo-200'
                                        href='https://www.linkedin.com/company/care-quality-training/'
                                        target='_blank'
                                        rel='noreferrer'>
                                        <span className='sr-only'>
                                            CQT on LinkedIn
                                        </span>
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
                                </li>
                                <li>
                                    <Link
                                        className='group text-indigo-200'
                                        href='https://www.facebook.com/bbw.cqt/'
                                        target='_blank'
                                        rel='noreferrer'>
                                        <span className='sr-only'>
                                            CQT on Facebook
                                        </span>
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
                                </li>
                            </ul>
                        </div>

                        {/* Contact form */}
                        <div className='py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12'>
                            <h3 className='text-lg font-medium text-gray-900'>
                                Send us a message
                            </h3>
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className='mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'>
                                {error && (
                                    <small className='text-red-500'>
                                        {error}
                                    </small>
                                )}
                                <div className='sm:col-span-2'>
                                    <label
                                        htmlFor='name'
                                        className='block text-sm font-medium text-gray-900'>
                                        Name *
                                    </label>
                                    <div className='mt-1'>
                                        <input
                                            type='text'
                                            id='name'
                                            autoComplete='name'
                                            {...register('name')}
                                            className='block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-primary/90 focus:ring-primary/90'
                                            aria-describedby='name'
                                        />
                                    </div>
                                    {errors.name && (
                                        <small className='text-red-500'>
                                            {errors.name.message}
                                        </small>
                                    )}
                                </div>
                                <div>
                                    <label
                                        htmlFor='email'
                                        className='block text-sm font-medium text-gray-900'>
                                        Email *
                                    </label>
                                    <div className='mt-1'>
                                        <input
                                            id='email'
                                            type='email'
                                            autoComplete='email'
                                            {...register('email')}
                                            className='block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-primary/90 focus:ring-primary/90'
                                            aria-describedby='email'
                                        />
                                    </div>
                                    {errors.email && (
                                        <small className='text-red-500'>
                                            {errors.email.message}
                                        </small>
                                    )}
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
                                            id='phone'
                                            autoComplete='tel'
                                            {...register('phone')}
                                            className='block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-primary/90 focus:ring-primary/90'
                                            aria-describedby='phone-optional'
                                        />
                                    </div>
                                    {errors.phone && (
                                        <small className='text-red-500'>
                                            {errors.phone.message}
                                        </small>
                                    )}
                                </div>
                                <div className='sm:col-span-2'>
                                    <label
                                        htmlFor='subject'
                                        className='block text-sm font-medium text-gray-900'>
                                        Subject *
                                    </label>
                                    <div className='mt-1'>
                                        <input
                                            type='text'
                                            id='subject'
                                            {...register('subject')}
                                            className='block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-primary/90 focus:ring-primary/90'
                                            aria-describedby='subject'
                                        />
                                    </div>
                                    {errors.subject && (
                                        <small className='text-red-500'>
                                            {errors.subject.message}
                                        </small>
                                    )}
                                </div>
                                <div className='sm:col-span-2'>
                                    <div className='flex justify-between'>
                                        <label
                                            htmlFor='message'
                                            className='block text-sm font-medium text-gray-900'>
                                            Message *
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
                                            rows={4}
                                            {...register('message')}
                                            className='block w-full rounded-md border border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-primary/90 focus:ring-primary/90'
                                            aria-describedby='message'
                                            defaultValue={''}
                                        />
                                    </div>
                                    {errors.message && (
                                        <small className='text-red-500'>
                                            {errors.message.message}
                                        </small>
                                    )}
                                </div>
                                <div className='sm:col-span-2 sm:flex sm:justify-end'>
                                    <button
                                        type='submit'
                                        disabled={submitting}
                                        className='mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/90 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-500 sm:w-auto'>
                                        <span>Submit</span>
                                        <RefreshIcon
                                            className={`h-4 animate-spin ${
                                                submitting ? 'block' : 'hidden'
                                            }`}
                                        />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Contact.pageTitle = 'Contact';

export default Contact;
