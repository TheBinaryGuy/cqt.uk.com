import { AuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import Auth0Provider from 'next-auth/providers/auth0';
import { client } from '@/clients/sanity-client';
import groq from 'groq';

if (
    process.env.AUTH0_CLIENT_ID === undefined ||
    process.env.AUTH0_CLIENT_SECRET === undefined ||
    process.env.AUTH0_ISSUER === undefined
) {
    throw new Error(
        'AUTH0_CLIENT_ID, AUTH0_CLIENT_SECRET, and AUTH0_ISSUER must be defined in the environment'
    );
}

export const authOptions: AuthOptions = {
    secret: process.env.AUTH0_CLIENT_SECRET,
    providers: [
        Auth0Provider({
            clientId: process.env.AUTH0_CLIENT_ID,
            clientSecret: process.env.AUTH0_CLIENT_SECRET,
            issuer: process.env.AUTH0_ISSUER,
            authorization: {
                params: {
                    prompt: 'login',
                },
            },
        }),
    ],
    callbacks: {
        async signIn({ profile }) {
            if (!profile) {
                throw new Error('Profile not found!');
            }

            const attendee = await client.fetch(
                groq`*[_type == "attendee" && lower(email) == lower($email)][0]`,
                { email: profile.email }
            );

            if (!attendee) {
                throw new Error('You are not authorized!');
            }

            return true;
        },
    },
    pages: {
        error: '/auth/error',
    },
};

export default NextAuth(authOptions);
