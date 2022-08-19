const CourseHeader = ({
    category,
    title,
}: {
    category:
        | 'First Aid for Mental Health'
        | 'Mental Health Adults and Children'
        | 'Health And Safety';
    title: string;
}) => (
    <div className='mx-auto max-w-prose text-base lg:max-w-none'>
        <h2 className='text-base font-semibold uppercase tracking-wide text-primary'>
            {category}
        </h2>
        <h1 className='mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
            {title}
        </h1>
    </div>
);

export default CourseHeader;
