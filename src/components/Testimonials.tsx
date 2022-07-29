import clsx from 'clsx';
import Image, { StaticImageData } from 'next/future/image';

import ActiveProspects from '@/assets/images/logos/Active-Prospects.png';
import KAMPC from '@/assets/images/logos/KAM-Project-Consultants.png';
import OSJCT from '@/assets/images/logos/OSJCT.png';
import PrimeLife from '@/assets/images/logos/PrimeLife.png';
import Sutton from '@/assets/images/logos/Sutton.png';

type Author = {
    name: string;
    role: string | null;
    image: StaticImageData | string;
};

type Testimonial = {
    content: string;
    author: Author;
};

const testimonials: Testimonial[][] = [
    [
        {
            content:
                'I now have a greater understanding of some of the mental health triggers. I will be more aware of the mental health issues that some people are suffering with. I am now able to handle difficult situations.',
            author: {
                name: 'Prime-Life',
                role: 'Care Worker',
                image: PrimeLife,
            },
        },
        {
            content:
                'Mental Health course given me more insight into a presenting problem that will enable me to signpost the young person to the right service if required.',
            author: {
                name: 'London Borough Sutton Council',
                role: 'Manager',
                image: Sutton,
            },
        },
        {
            content:
                'I really enjoyed the mental health first aid training; it was sensitively and well delivered an excellent day delivering a difficult subject. Thank you!',
            author: {
                name: 'KAM Project Consultants',
                role: null,
                image: KAMPC,
            },
        },
    ],
    [
        {
            content:
                'I can support the service users in a different way now to ensure they get the support that they need, and also support the people who care for them. Relevant topics covered, everything that I expected and more.',
            author: {
                name: 'Team Leader',
                role: 'Active Prospects',
                image: ActiveProspects,
            },
        },
        {
            content:
                'I found the mental wellbeing training very sobering, insightful and interactive. Presentations were interesting with some good slides and videos that kept us all engaged. A real eye-opener for us all.',
            author: {
                name: 'KAM Project Consultants',
                role: null,
                image: KAMPC,
            },
        },
        {
            content:
                'I would recommend the course as it provides good information about how to manage patients who are aggressive both physically and verbally.',
            author: {
                name: 'The Orders of St John Care Trust (OSJCT)',
                role: null,
                image: OSJCT,
            },
        },
    ],
    [
        {
            content:
                'Brian was a very engaging trainer and covered a whole suite of topics. I think it would be a good idea to refresh this in 12 months.',
            author: {
                name: 'KAM Project Consultants',
                role: null,
                image: KAMPC,
            },
        },
        {
            content:
                'I feel better equipped to manage difficult situations after completing the course. Thank you CQT',
            author: {
                name: 'The Orders of St John Care Trust (OSJCT)',
                role: null,
                image: OSJCT,
            },
        },
        {
            content:
                'I found the Mental Health First Aid course very informative with a very knowledgeable trainer who goes that extra mile. There were many elements of the training which will help me support people at work and socially so thank you Brian.',
            author: {
                name: 'KAM Project Consultants',
                role: null,
                image: KAMPC,
            },
        },
    ],
];

const Testimonial = ({
    author,
    children,
}: {
    author: Author;
    children: React.ReactNode;
}) => {
    return (
        <figure className='rounded-4xl p-8 shadow-md ring-1 ring-slate-900/5'>
            <blockquote>
                <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”']">
                    {children}
                </p>
            </blockquote>
            <figcaption className='mt-6 flex items-center'>
                <div className='relative flex aspect-[2/1] w-24 items-center justify-center overflow-hidden rounded-full'>
                    <Image src={author.image} alt='' />
                </div>
                <div className='ml-4'>
                    <div className='text-base font-medium leading-6 tracking-tight text-slate-900'>
                        {author.name}
                    </div>
                    <div className='mt-1 text-sm text-slate-600'>
                        {author.role}
                    </div>
                </div>
            </figcaption>
        </figure>
    );
};

const Testimonials = () => (
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
            {testimonials.map((column, columnIndex) => (
                <li key={columnIndex}>
                    <ul>
                        {column.map((testimonial, testimonialIndex) => (
                            <li
                                key={testimonialIndex}
                                className={clsx({
                                    'hidden lg:list-item':
                                        testimonialIndex === 0,
                                    'lg:mt-8': testimonialIndex === 1,
                                    'mt-8': testimonialIndex > 1,
                                })}>
                                <Testimonial author={testimonial.author}>
                                    {testimonial.content}
                                </Testimonial>
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    </section>
);

export default Testimonials;
