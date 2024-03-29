import { Popover, Transition } from '@headlessui/react';
import clsx from 'clsx';
import Link from 'next/link';
import { Fragment } from 'react';

import { Logo } from '@/components/Logo';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const MobileNavigation = () => {
    const session = useSession();
    const { pathname } = useRouter();

    return (
        <Popover>
            {({ open, close }) => (
                <>
                    <Popover.Button className='relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none'>
                        <span className='sr-only'>Toggle Navigation</span>
                        <svg
                            aria-hidden='true'
                            className='h-3.5 w-3.5 overflow-visible stroke-slate-700'
                            fill='none'
                            strokeWidth={2}
                            strokeLinecap='round'>
                            <path
                                d='M0 1H14M0 7H14M0 13H14'
                                className={clsx('origin-center transition', {
                                    'scale-90 opacity-0': open,
                                })}
                            />
                            <path
                                d='M2 2L12 12M12 2L2 12'
                                className={clsx('origin-center transition', {
                                    'scale-90 opacity-0': !open,
                                })}
                            />
                        </svg>
                    </Popover.Button>
                    <Transition.Root>
                        <Transition.Child
                            as={Fragment}
                            enter='duration-150 ease-out'
                            enterFrom='opacity-0'
                            enterTo='opacity-100'
                            leave='duration-150 ease-in'
                            leaveFrom='opacity-100'
                            leaveTo='opacity-0'>
                            <Popover.Overlay className='fixed inset-0 bg-slate-300/50' />
                        </Transition.Child>
                        <Transition.Child
                            as={Fragment}
                            enter='duration-150 ease-out'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='duration-100 ease-in'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'>
                            <Popover.Panel
                                as='ul'
                                className='absolute inset-x-0 top-full mt-4 origin-top space-y-4 rounded-2xl bg-white p-6 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5'>
                                <li>
                                    <Link
                                        href='/courses'
                                        className='block w-full'
                                        onClick={() => close()}>
                                        Courses
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/blog'
                                        className='block w-full'
                                        onClick={() => close()}>
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/testimonials'
                                        className='block w-full'
                                        onClick={() => close()}>
                                        Testimonials
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/faq'
                                        className='block w-full'
                                        onClick={() => close()}>
                                        FAQ
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/about'
                                        className='block w-full'
                                        onClick={() => close()}>
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/contact'
                                        className='block w-full'
                                        onClick={() => close()}>
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/resources'
                                        className='block w-full'
                                        onClick={() => close()}>
                                        Resources
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        type='button'
                                        disabled={session.status === 'loading'}
                                        onClick={() => {
                                            if (
                                                session.status ===
                                                'authenticated'
                                            ) {
                                                signOut();
                                                close();
                                                return;
                                            }

                                            if (
                                                session.status ===
                                                'unauthenticated'
                                            ) {
                                                if (pathname === '/login') {
                                                    signIn(undefined, {
                                                        callbackUrl: '/',
                                                    });
                                                    close();
                                                    return;
                                                }

                                                signIn();
                                                close();
                                            }
                                        }}>
                                        {session.status === 'loading'
                                            ? 'Loading'
                                            : session.status === 'authenticated'
                                            ? 'Logout'
                                            : 'Login'}
                                    </button>
                                </li>
                            </Popover.Panel>
                        </Transition.Child>
                    </Transition.Root>
                </>
            )}
        </Popover>
    );
};

export const Header = () => {
    const session = useSession();
    const { pathname } = useRouter();

    return (
        <header className='py-10'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <nav className='relative z-50 text-sm'>
                    <ul className='flex items-center'>
                        <li>
                            <Link href='/'>
                                <span className='sr-only'>Home</span>
                                <Logo className='h-12 w-auto' />
                            </Link>
                        </li>
                        <li className='ml-auto hidden lg:block'>
                            <Link
                                href='/courses'
                                className='rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900'>
                                Courses
                            </Link>
                        </li>
                        <li className='ml-6 hidden lg:block'>
                            <Link
                                href='/blog'
                                className='rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900'>
                                Blog
                            </Link>
                        </li>
                        <li className='ml-6 hidden lg:block'>
                            <Link
                                href='/testimonials'
                                className='rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900'>
                                Testimonials
                            </Link>
                        </li>
                        <li className='ml-6 hidden lg:block'>
                            <Link
                                href='/faq'
                                className='rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900'>
                                FAQ
                            </Link>
                        </li>
                        <li className='ml-6 hidden lg:block'>
                            <Link
                                href='/about'
                                className='rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900'>
                                About
                            </Link>
                        </li>
                        <li className='ml-6 hidden lg:block'>
                            <Link
                                href='/contact'
                                className='rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900'>
                                Contact
                            </Link>
                        </li>
                        <li className='ml-6 hidden lg:block'>
                            <Link
                                href='/resources'
                                className='rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900'>
                                Resources
                            </Link>
                        </li>
                        <li className='ml-auto hidden lg:block'>
                            <button
                                type='button'
                                disabled={session.status === 'loading'}
                                onClick={() => {
                                    if (session.status === 'authenticated') {
                                        signOut();
                                        return;
                                    }

                                    if (session.status === 'unauthenticated') {
                                        if (pathname === '/login') {
                                            signIn(undefined, {
                                                callbackUrl: '/',
                                            });
                                        } else {
                                            signIn();
                                        }
                                    }
                                }}
                                className='group inline-flex items-center justify-center rounded-full bg-primary py-2 px-4 text-sm font-semibold text-white hover:bg-primary/90 hover:text-slate-100 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/90 active:bg-primary/90 active:text-blue-100'>
                                {session.status === 'loading'
                                    ? 'Loading'
                                    : session.status === 'authenticated'
                                    ? 'Logout'
                                    : 'Login'}
                            </button>
                        </li>
                        <li className='ml-auto mr-3 lg:hidden'>
                            <MobileNavigation />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
