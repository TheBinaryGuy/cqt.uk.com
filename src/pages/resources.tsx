import { client } from '@/clients/sanity-client';
import Resources from '@/components/Resource';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { Resource } from '@/schemas/sanity-types';
import groq from 'groq';
import {
    GetServerSideProps,
    GetStaticProps,
    InferGetServerSidePropsType,
    InferGetStaticPropsType,
} from 'next';
import { getServerSession } from 'next-auth';
import { signIn, useSession } from 'next-auth/react';
import { FC, useEffect } from 'react';

const ResourcesPage: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
    resources,
}) => {
    const { status } = useSession();

    useEffect(() => {
        if (status === 'unauthenticated') {
            signIn();
        }
    }, [status]);

    if (status === 'unauthenticated' || status === 'loading') {
        return null;
    }

    return <Resources resources={resources} />;
};

export default ResourcesPage;

export const getStaticProps: GetStaticProps<{
    resources: Resource[];
}> = async () => {
    const resources =
        (await client.fetch<Resource[] | null>(
            groq`*[_type == "resource"] {
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
        )) ?? [];

    return {
        props: {
            resources,
        },
        revalidate: 10800,
    };
};
