import Courses, { GetCourses } from '@/components/Courses';
import { CoursesPageQuery } from '@/schemas/sanity-types';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { FC } from 'react';

const CoursesPage: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
    coursesPage,
}) => <Courses coursesPage={coursesPage} />;

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
            pageTitle: coursesPage.title,
            pageDesc: coursesPage.description ?? null,
        },
        revalidate: 10800,
    };
};

export default CoursesPage;
