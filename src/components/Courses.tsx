import Image from 'next/future/image';
import Link from 'next/link';

import { courses, type Course } from '@/data/courses';

const CourseCard = ({ course }: { course: Course }) => (
    <Link href={course.href} key={course.title}>
        <li>
            <div className='flex overflow-hidden rounded shadow-sm'>
                <Image
                    src={course.image}
                    alt={course.title}
                    width={800}
                    height={450}
                />
            </div>
            <h3 className='mt-4 text-base font-medium tracking-tight text-slate-900'>
                {course.title}
            </h3>
            <p className='mt-2 text-sm text-slate-600'>{course.description}</p>
        </li>
    </Link>
);

const Courses = () => (
    <section
        id='courses'
        aria-labelledby='courses-title'
        className='scroll-mt-14 py-16 sm:scroll-mt-16 sm:py-20'>
        <div className='mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12'>
            <h2
                id='courses-title'
                className='font-display text-center text-4xl font-bold text-slate-900'>
                Courses
            </h2>
        </div>
        <div className='mx-auto mt-16 space-y-4 px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-7xl lg:px-8'>
            <div className='flex items-center gap-5'>
                <h3 className='font-display border-b border-b-primary text-2xl sm:flex-grow-0 sm:border-0 sm:text-3xl'>
                    First Aid for Mental Health
                </h3>
                <div className='hidden h-0.5 flex-grow rounded-full bg-primary sm:block' />
            </div>
            <ol className='grid grid-cols-1 gap-y-10 gap-x-8 [counter-reset:video] sm:grid-cols-2 lg:grid-cols-3'>
                {courses.mentalHealth.map(course => (
                    <CourseCard key={course.title} course={course} />
                ))}
            </ol>
        </div>
        <div className='mx-auto mt-16 space-y-4 px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-7xl lg:px-8'>
            <div className='flex items-center gap-5'>
                <div className='hidden h-0.5 flex-grow rounded-full bg-primary sm:block' />
                <h3 className='font-display border-b border-b-primary text-2xl sm:flex-grow-0 sm:border-0 sm:text-3xl'>
                    Mental Health Adults and Children
                </h3>
            </div>
            <ol className='grid grid-cols-1 gap-y-10 gap-x-8 [counter-reset:video] sm:grid-cols-2 lg:grid-cols-3'>
                {courses.adultsAndChildren.map(course => (
                    <CourseCard key={course.title} course={course} />
                ))}
            </ol>
        </div>
        <div className='mx-auto mt-16 space-y-4 px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-7xl lg:px-8'>
            <div className='flex items-center gap-5'>
                <h3 className='font-display border-b border-b-primary text-2xl sm:flex-grow-0 sm:border-0 sm:text-3xl'>
                    Health And Safety
                </h3>
                <div className='hidden h-0.5 flex-grow rounded-full bg-primary sm:block' />
            </div>
            <ol className='grid grid-cols-1 gap-y-10 gap-x-8 [counter-reset:video] sm:grid-cols-2 lg:grid-cols-3'>
                {courses.healthAndSafety.map(course => (
                    <CourseCard key={course.title} course={course} />
                ))}
            </ol>
        </div>
    </section>
);

export default Courses;
