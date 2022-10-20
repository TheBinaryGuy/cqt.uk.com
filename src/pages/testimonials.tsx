import { client } from '@/clients/sanity-client';
import Testimonials from '@/components/Testimonials';
import { Testimonial } from '@/schemas/sanity-types';
import groq from 'groq';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { FC } from 'react';

const TestimonialsPage: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
    testimonials,
}) => <Testimonials testimonials={testimonials} />;

export const getStaticProps: GetStaticProps<{
    testimonials: Testimonial[];
}> = async () => {
    const testimonials = await client.fetch<Testimonial[] | null>(groq`
        *[_type == "testimonial"] | order(priority asc) {
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
    `);

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
