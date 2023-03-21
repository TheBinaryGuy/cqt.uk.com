import { client } from '@/clients/sanity-client';
import PostHeader from '@/components/PostHeader';
import { Post, Slug } from '@/schemas/sanity-types';
import { PortableText } from '@portabletext/react';
import groq from 'groq';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { FC } from 'react';

const Post: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ post }) => (
    <div className='overflow-hidden bg-gray-50 py-16'>
        <div className='mx-auto max-w-prose space-y-8 px-4 sm:px-6 lg:px-8'>
            <PostHeader category={post.category.title} title={post.title} />

            <div className='prose prose-indigo mx-auto lg:max-w-none'>
                {post.body && <PortableText value={post.body} />}
            </div>
        </div>
    </div>
);

export const getStaticProps: GetStaticProps<{
    post: Post;
}> = async ctx => {
    const slug = ctx.params!.slug as string;

    const post = await client.fetch<Post | null>(groq`
        *[_type == "post" && slug.current match "${slug}"] {
            ...,
            category->,
            mainImage {
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
            pageImg: post.mainImage.asset.url,
        },
        revalidate: 10800,
    };
};

export const GetPostSlugs = () =>
    client.fetch<{ slug: Slug }[] | null>(groq`
        *[_type == "post"] {
            slug {
                current
            },
        }
    `);

export const getStaticPaths: GetStaticPaths = async () => {
    const postSlugs = await GetPostSlugs();

    return {
        paths:
            postSlugs?.map(p => ({
                params: {
                    slug: p.slug.current,
                },
            })) ?? [],
        fallback: 'blocking',
    };
};

export default Post;
