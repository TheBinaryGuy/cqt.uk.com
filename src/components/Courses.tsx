import { client } from '@/clients/sanity-client';
import { Course, CoursesPageQuery } from '@/schemas/sanity-types';
import clsx from 'clsx';
import groq from 'groq';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const CourseCard = ({ course }: { course: Course }) => (
    <Link href={`/courses/${course.slug.current}`} key={course._id}>
        <li>
            <div className='flex overflow-hidden rounded shadow-sm'>
                <Image
                    src={course.main_image.asset.url}
                    alt={course.title}
                    width={800}
                    height={450}
                    blurDataURL={course.main_image.asset.metadata.blurHash}
                />
            </div>
            <h3 className='mt-4 text-base font-medium tracking-tight text-slate-900'>
                {course.title}
            </h3>
            <p className='mt-2 text-sm text-slate-600'>{course.excerpt}</p>
        </li>
    </Link>
);

const Courses: FC<{ coursesPage: CoursesPageQuery }> = ({ coursesPage }) => (
    <section
        id='courses'
        aria-labelledby='courses-title'
        className='scroll-mt-14 py-16 sm:scroll-mt-16 sm:py-20'>
        <div className='mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12'>
            <h2
                id='courses-title'
                className='font-display text-center text-4xl font-bold text-slate-900'>
                {coursesPage.title}
            </h2>
        </div>
        {coursesPage.categories!.map(category =>
            category.courses?.length ?? 0 > 0 ? (
                <div
                    key={category._id}
                    className='mx-auto mt-16 space-y-4 px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-7xl lg:px-8'>
                    <div className='flex items-center gap-5'>
                        <h3
                            className={clsx(
                                'font-display border-b border-b-primary text-2xl sm:flex-grow-0 sm:border-0 sm:text-3xl',
                                {
                                    [`order-1`]: category.placement_right,
                                }
                            )}>
                            {category.title}
                        </h3>
                        <div className='hidden h-0.5 flex-grow rounded-full bg-primary sm:block' />
                    </div>
                    {category.courses && (
                        <ol className='grid grid-cols-1 gap-y-10 gap-x-8 [counter-reset:course] sm:grid-cols-2 lg:grid-cols-3'>
                            {category.courses.map(course => (
                                <CourseCard
                                    key={course.title}
                                    course={course}
                                />
                            ))}
                        </ol>
                    )}
                </div>
            ) : null
        )}
    </section>
);

export const GetCourses = () => {
    return client.fetch<CoursesPageQuery | null>(groq`
        *[_type == "courses_page"] {
            _id,
            categories[]-> {
                ...,
                "courses": *[_type=="course" && references(^._id)] | order(priority asc) {
                    _id,
                    excerpt,
                    main_image {
                        asset-> {
                            extension,
                            metadata {
                                blurHash,
                                dimensions {
                                    aspectRatio,
                                    height,
                                    width
                                }
                            },
                            mimeType,
                            url
                        }
                    },
                    main_category->,
                    slug {
                        current
                    },
                    title
                },
            },
            slug {
                current
            },
            title
        }[0]
    `);
};

export default Courses;
