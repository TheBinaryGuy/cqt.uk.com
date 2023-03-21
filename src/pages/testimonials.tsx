import Testimonials, { GetTestimonials } from '@/components/Testimonials';
import { Testimonial } from '@/schemas/sanity-types';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { FC } from 'react';

const TestimonialsPage: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
    testimonials,
}) => <Testimonials testimonials={testimonials} />;

export const getStaticProps: GetStaticProps<{
    testimonials: Testimonial[];
}> = async () => {
    const testimonials = await GetTestimonials();

    if (!testimonials) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            testimonials,
            pageTitle: 'Testimonials',
        },
    };
};

export default TestimonialsPage;
