import { useQuery } from '@tanstack/react-query';
import { API_URL } from '@env';
import axios from 'axios';

// A placeholder for the health check response type
interface HealthStatus {
    status: string;
    message: string;
}

const fetchExample = async (): Promise<HealthStatus> => {
    // This is a placeholder. Replace with your actual endpoint.
    const { data } = await axios.get<HealthStatus>(`${API_URL}/health`);
    return data;
};

export const useExampleQuery = () => {
    return useQuery({
        queryKey: ['example'],
        queryFn: fetchExample,
    });
}; 