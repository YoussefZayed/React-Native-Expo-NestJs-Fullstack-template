import { create } from 'zustand';
import { contract } from '@contract';
import { ClientInferResponseBody } from '@ts-rest/core';


type User = ClientInferResponseBody<typeof contract.me, 200>;

interface UserState {
    user: User | null;
    accessToken: string | null;
    login: (user: User, accessToken: string) => void;
    logout: () => void;
}

const useUserStore = create<UserState>((set) => ({
    user: null,
    accessToken: null,
    login: (user, accessToken) => set({ user, accessToken }),
    logout: () => set({ user: null, accessToken: null }),
}));

export default useUserStore; 