import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const c = initContract();

export const healthContract = c.router({
    healthCheck: {
        method: 'GET',
        path: '/health',
        responses: {
            200: z.object({
                status: z.string(),
                timestamp: z.string().datetime(),
            }),
        },
        summary: 'Performs a health check',
    },
}); 