import Sutton from '@/assets/images/logos/Sutton.png';
import Courses, { GetCourses } from '@/components/Courses';
import { Hero } from '@/components/Hero';
import { Testimonial } from '@/components/Testimonial';
import Testimonials from '@/components/Testimonials';
import { CoursesPageQuery } from '@/schemas/sanity-types';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { FC } from 'react';

const Index: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
    coursesPage,
}) => (
    <>
        <Hero />
        <Testimonial
            id='london-borough-sutton-council-hero'
            author={{
                name: 'London Borough Sutton Council',
                role: 'Social Worker',
                image: Sutton,
            }}>
            <p>
                “I work with children aged between 11 and 18. It will definitely
                help support my role when I meet with troubled children on a
                daily basis. I will use strategies with young people. Very
                Helpful and Educational.”
            </p>
        </Testimonial>
        <Courses coursesPage={coursesPage} />
        <Testimonials />
    </>
);

export const getStaticProps: GetStaticProps<{
    coursesPage: CoursesPageQuery;
}> = async () => {
    const coursesPage = await GetCourses();

    if (!coursesPage || !coursesPage.categories) {
        return {
            notFound: true,
            revalidate: 10800,
        };
    }

    return {
        props: {
            coursesPage,
            pageTitle: 'Home',
        },
        revalidate: 10800,
    };
};

export default Index;
