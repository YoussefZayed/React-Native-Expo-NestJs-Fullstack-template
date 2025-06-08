import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const c = initContract();

const UserSchema = z.object({
    id: z.number(),
    username: z.string(),
    createdAt: z.date(),
});

export const authContract = c.router({
    register: {
        method: 'POST',
        path: '/auth/register',
        body: z.object({
            username: z.string(),
            password: z.string(),
        }),
        responses: {
            201: UserSchema,
        },
        summary: 'Register a new user',
    },
    login: {
        method: 'POST',
        path: '/auth/login',
        body: z.object({
            username: z.string(),
            password: z.string(),
        }),
        responses: {
            200: z.object({
                accessToken: z.string(),
            }),
        },
        summary: 'Login a user',
    },
}); 