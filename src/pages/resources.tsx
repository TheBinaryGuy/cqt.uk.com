import { client } from '@/clients/sanity-client';
import Resources from '@/components/Resource';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { Resource } from '@/schemas/sanity-types';
import groq from 'groq';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getServerSession } from 'next-auth';
import { FC } from 'react';

const ResourcesPage: FC<
    InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ resources }) => <Resources resources={resources} />;

export default ResourcesPage;

export const getServerSideProps: GetServerSideProps<{
    resources: Resource[];
}> = async ctx => {
    const session = await getServerSession(ctx.req, ctx.res, authOptions);

    if (!session) {
        return {
            redirect: {
                destination: `/api/auth/signin?callbackUrl=${ctx.resolvedUrl}`,
            },
            props: { resources: [] },
        };
    }

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
        props: { resources },
    };
};
