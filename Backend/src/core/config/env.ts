import { z } from 'zod';

export const envSchema = z.object({
    DATABASE_URL: z.string().url(),
    NODE_ENV: z
        .enum(['development', 'production', 'test'])
        .default('development'),
    PORT: z.coerce.number().default(3000),
});

export type Env = z.infer<typeof envSchema>; 