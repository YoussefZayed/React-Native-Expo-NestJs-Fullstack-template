import { create } from 'zustand';

interface UserState {
    username: string | null;
    accessToken: string | null;
    login: (username: string, accessToken: string) => void;
    logout: () => void;
}

const useUserStore = create<UserState>((set) => ({
    username: null,
    accessToken: null,
    login: (username, accessToken) => set({ username, accessToken }),
    logout: () => set({ username: null, accessToken: null }),
}));

export default useUserStore; 