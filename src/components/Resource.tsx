import { Resource } from '@/schemas/sanity-types';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const ResourceCard = ({ resource }: { resource: Resource }) => (
    <Link
        href={resource.url}
        key={resource._id}
        target='_blank'
        rel='noreferrer'>
        <li>
            <div className='overflow-hidden rounded shadow-sm'>
                <Image
                    src={resource.mainImage.asset.url}
                    alt={resource.title}
                    width={800}
                    height={450}
                    blurDataURL={resource.mainImage.asset.metadata.blurHash}
                />
            </div>
            <h3 className='mt-4 text-base font-medium tracking-tight text-slate-900'>
                {resource.title}
            </h3>
            <p className='mt-2 text-sm text-slate-600'>{resource.excerpt}</p>
        </li>
    </Link>
);

const Resources: FC<{ resources: Resource[] }> = ({ resources }) => (
    <section
        id='resources'
        aria-labelledby='resources-title'
        className='scroll-mt-14 py-16 sm:scroll-mt-16 sm:py-20'>
        <div className='mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12'>
            <h2
                id='resources-title'
                className='font-display text-center text-4xl font-bold text-slate-900'>
                Resources
            </h2>
        </div>
        <div className='mx-auto mt-16 space-y-4 px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-7xl lg:px-8'>
            <ol className='grid grid-cols-1 gap-y-10 gap-x-8 [counter-reset:course] sm:grid-cols-2 lg:grid-cols-3'>
                {resources.map(resource => (
                    <ResourceCard key={resource.title} resource={resource} />
                ))}
            </ol>
        </div>
    </section>
);

export default Resources;
