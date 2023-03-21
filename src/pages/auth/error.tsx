import { useRouter } from 'next/router';
export default function Error() {
    const { query } = useRouter();

    return (
        <section className='py-16 sm:py-20'>
            <div className='mx-auto flex flex-col gap-4 px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12'>
                <h2
                    id='courses-title'
                    className='font-display text-center text-4xl font-bold text-slate-900'>
                    Error
                </h2>
                {query.error && (
                    <p className='text-center text-xl text-red-600'>
                        {query.error}
                    </p>
                )}
            </div>
        </section>
    );
}
