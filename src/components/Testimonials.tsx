import { client } from '@/clients/sanity-client';
import { Testimonial } from '@/schemas/sanity-types';
import groq from 'groq';
import NextImage from 'next/image';

const Testimonial = ({ testimonial }: { testimonial: Testimonial }) => {
    return (
        <figure className='rounded-4xl flex h-full flex-col p-8 shadow-md ring-1 ring-slate-900/5'>
            <blockquote className="flex-auto text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”']">
                {testimonial.body}
            </blockquote>
            <figcaption className='mt-6 flex items-center'>
                <div className='relative flex aspect-[2/1] w-24 items-center justify-center overflow-hidden rounded-full'>
                    <NextImage
                        src={testimonial.image.asset.url}
                        alt={testimonial.name}
                        width={400}
                        height={200}
                        className='object-cover'
                        blurDataURL={testimonial.image.asset.metadata.blurHash}
                    />
                </div>
                <div className='ml-4'>
                    <div className='text-base font-medium leading-6 tracking-tight text-slate-900'>
                        {testimonial.name}
                    </div>
                    <div className='mt-1 text-sm text-slate-600'>
                        {testimonial.role}
                    </div>
                </div>
            </figcaption>
        </figure>
    );
};

const Testimonials = ({
    testimonials,
}: {
    testimonials: Testimonial[] | null;
}) => {
    if (!testimonials) {
        return null;
    }

    return (
        <section
            id='testimonials'
            aria-labelledby='testimonials-title'
            className='scroll-mt-14 py-16 sm:scroll-mt-16 sm:py-20'>
            <div className='mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12'>
                <h2
                    id='testimonials-title'
                    className='font-display text-center text-4xl font-bold text-slate-900'>
                    Testimonials
                </h2>
            </div>
            <ul className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 px-4 lg:max-w-7xl lg:grid-cols-3 lg:px-8'>
                {testimonials.map(testimonial => (
                    <li className='h-full' key={testimonial._id}>
                        <Testimonial testimonial={testimonial} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export const GetTestimonials = async () => {
    return await client.fetch<Testimonial[] | null>(groq`
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
};

export default Testimonials;
