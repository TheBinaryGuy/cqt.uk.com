import Link from 'next/link';

const CourseCTA = ({ link }: { link?: string }) => (
    <div className='mx-auto mt-10 flex max-w-prose flex-col gap-2 text-base sm:flex-row sm:gap-4 lg:max-w-none'>
        {link && (
            <div className='rounded-md shadow'>
                <Link
                    href={link}
                    target='_blank'
                    rel='noreferrer'
                    className='flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-5 py-3 text-base font-medium text-white hover:bg-primary/90'>
                    Book This Course
                </Link>
            </div>
        )}
        <div className='rounded-md shadow'>
            <Link
                href='/contact'
                className='flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-primary hover:bg-gray-50'>
                Contact Us
            </Link>
        </div>
    </div>
);

export default CourseCTA;
