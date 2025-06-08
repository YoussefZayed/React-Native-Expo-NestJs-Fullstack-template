import { client } from '../lib/ts-rest';

export const useHealthCheckQuery = () => {
    return client.healthCheck.useQuery(['healthCheck']);
};

export const useLoginMutation = () => {
    return client.login.useMutation();
};

export const useRegisterMutation = () => {
    return client.register.useMutation();
};
