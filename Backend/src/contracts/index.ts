import { initContract } from '@ts-rest/core';
import { healthRoutes } from '../health/health.contract';

const c = initContract();

export const contract = c.router({
    ...healthRoutes,
}); 