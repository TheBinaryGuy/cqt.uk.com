import { client } from '@/clients/sanity-client';
import Posts from '@/components/Posts';
import { Post } from '@/schemas/sanity-types';
import groq from 'groq';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { FC } from 'react';

const BlogPage: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
    posts,
}) => <Posts posts={posts} />;

export const getStaticProps: GetStaticProps<{
    posts: Post[];
}> = async () => {
    const posts = await client.fetch<Post[] | null>(
        groq`*[_type == "post"] {
            ...,
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
        }`
    );

    if (!posts) {
        return {
            notFound: true,
            revalidate: 10800,
        };
    }

    return {
        props: {
            posts,
        },
        revalidate: 10800,
    };
};

export default BlogPage;
