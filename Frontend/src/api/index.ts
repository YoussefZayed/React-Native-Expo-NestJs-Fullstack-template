import { client } from '../lib/ts-rest';

export const useHealthCheckQuery = () => {
    return client.healthCheck.useQuery(['healthCheck']);
};
