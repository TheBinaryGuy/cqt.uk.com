import Link from 'next/link';

const NotFound = () => (
    <div className='min-h-full bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8'>
        <div className='mx-auto max-w-max'>
            <main className='sm:flex'>
                <p className='text-4xl font-extrabold text-primary sm:text-5xl'>
                    404
                </p>
                <div className='sm:ml-6'>
                    <div className='sm:border-l sm:border-gray-200 sm:pl-6'>
                        <h1 className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl'>
                            Page not found
                        </h1>
                        <p className='mt-1 text-base text-gray-500'>
                            Please check the URL in the address bar and try
                            again.
                        </p>
                    </div>
                    <div className='mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6'>
                        <Link
                            href='/'
                            className='inline-flex items-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/90 focus:ring-offset-2'>
                            Go back home
                        </Link>
                        <Link
                            href='#'
                            className='inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-primary hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-primary/90 focus:ring-offset-2'>
                            Contact Us
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    </div>
);

NotFound.pageTitle = '404 - Page Not Found';

export default NotFound;
