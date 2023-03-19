import { Post } from '@/schemas/sanity-types';
import Image from 'next/future/image';
import Link from 'next/link';
import { FC } from 'react';

const PostCard = ({ post }: { post: Post }) => (
    <Link href={`/blog/${post.slug.current}`} key={post._id}>
        <li>
            <div className='flex overflow-hidden rounded shadow-sm'>
                <Image
                    src={post.mainImage.asset.url}
                    alt={post.title}
                    width={800}
                    height={450}
                    blurDataURL={post.mainImage.asset.metadata.blurHash}
                />
            </div>
            <h3 className='mt-4 text-base font-medium tracking-tight text-slate-900'>
                {post.title}
            </h3>
            <p className='mt-2 text-sm text-slate-600'>{post.excerpt}</p>
        </li>
    </Link>
);

const Posts: FC<{ posts: Post[] }> = ({ posts }) => (
    <section
        id='courses'
        aria-labelledby='courses-title'
        className='scroll-mt-14 py-16 sm:scroll-mt-16 sm:py-20'>
        <div className='mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12'>
            <h2
                id='courses-title'
                className='font-display text-center text-4xl font-bold text-slate-900'>
                Blog
            </h2>
        </div>
        <div className='mx-auto mt-16 space-y-4 px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-7xl lg:px-8'>
            <ol className='grid grid-cols-1 gap-y-10 gap-x-8 [counter-reset:course] sm:grid-cols-2 lg:grid-cols-3'>
                {posts.map(post => (
                    <PostCard key={post.title} post={post} />
                ))}
            </ol>
        </div>
    </section>
);

export default Posts;
