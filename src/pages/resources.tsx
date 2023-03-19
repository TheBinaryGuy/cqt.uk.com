import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth';

const Resources = () => {
    return <div>Resources</div>;
};

export default Resources;

export const getServerSideProps: GetServerSideProps = async ctx => {
    const session = await getServerSession(ctx.req, ctx.res, authOptions);

    if (!session) {
        return {
            redirect: {
                destination: `/api/auth/signin?callbackUrl=${ctx.req.url}`,
            },
            props: {},
        };
    }

    return {
        props: {},
    };
};
