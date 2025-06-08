import { initQueryClient } from '@ts-rest/react-query';
import { contract } from '@contract';
import { API_URL } from '@env';

export const client = initQueryClient(contract, {
    baseUrl: API_URL,
    baseHeaders: {},
}); 