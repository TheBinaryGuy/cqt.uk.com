import { client } from '@/clients/sanity-client';
import CourseCTA from '@/components/CourseCTA';
import CourseHeader from '@/components/CourseHeader';
import CourseTestimonial from '@/components/CourseTestimonial';
import { Course, Slug } from '@/schemas/sanity-types';
import { PortableText } from '@portabletext/react';
import groq from 'groq';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { FC } from 'react';

const Course: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
    post,
}) => (
    <div className='overflow-hidden bg-gray-50 py-16'>
        <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8'>
            <CourseHeader
                category={post.main_category.title}
                title={post.title}
            />
            <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-8'>
                <div className='relative z-10'>
                    <div className='prose prose-indigo mx-auto lg:max-w-none'>
                        {post.body && <PortableText value={post.body} />}

                        <hr />

                        {post.cost && (
                            <h3>
                                Cost:{' '}
                                <span className='font-normal'>{post.cost}</span>
                            </h3>
                        )}

                        {post.duration && (
                            <h3>
                                Duration:{' '}
                                <span className='font-normal'>
                                    {post.duration}
                                </span>
                            </h3>
                        )}

                        {post.refresher_duration && (
                            <h3>
                                Refresher Duration:{' '}
                                <span className='font-normal'>
                                    {post.refresher_duration}
                                </span>
                            </h3>
                        )}

                        <hr className='mt-12' />

                        {post.notes && <PortableText value={post.notes} />}
                    </div>
                    <CourseCTA link={post.booking_page} />
                </div>
                {post.testimonial && (
                    <CourseTestimonial testimonial={post.testimonial} />
                )}
            </div>
        </div>
    </div>
);

export const getStaticProps: GetStaticProps<{
    post: Course;
}> = async ctx => {
    const slug = ctx.params!.slug as string;

    const post = await client.fetch<Course | null>(groq`
        *[_type == "course" && slug.current match "${slug}"] {
            _id,
            body,
            booking_page,
            cost,
            duration,
            refresher_duration,
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
            notes,
            slug {
                current
            },
            title,
            testimonial-> {
                _id,
                body,
                name,
                role,
                image {
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
            }
        }[0]
    `);

    if (!post) {
        return {
            notFound: true,
            revalidate: 10800,
        };
    }

    return {
        props: {
            post,
            pageTitle: post.title,
            pageDesc: post.excerpt,
            pageImg: post.main_image.asset.url,
        },
        revalidate: 10800,
    };
};

export const GetCourseSlugs = () =>
    client.fetch<{ slug: Slug }[] | null>(groq`
        *[_type == "course"] {
            slug {
                current
            },
        }
    `);

export const getStaticPaths: GetStaticPaths = async () => {
    const courseSlugs = await GetCourseSlugs();

    return {
        paths:
            courseSlugs?.map(s => ({
                params: {
                    slug: s.slug.current,
                },
            })) ?? [],
        fallback: 'blocking',
    };
};

export default Course;
