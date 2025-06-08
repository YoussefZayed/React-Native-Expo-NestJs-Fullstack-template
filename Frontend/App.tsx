import './global.css';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable } from 'react-native';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './src/lib/react-query';
import { useHealthCheckQuery } from './src/api';
import useUserStore from './src/store/user-store';
import { API_URL } from '@env';

function Main() {
  const { data, isLoading, error, refetch } = useHealthCheckQuery();
  const { user, setUser, logout } = useUserStore();

  console.log(error);

  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <Text className="text-2xl font-bold mb-4">Welcome to the App!</Text>

      <Text className="text-lg mb-2">API URL: {API_URL || "Not set"}</Text>

      <View className="p-4 border border-gray-300 rounded-lg mb-4 w-11/12">
        <Text className="text-lg font-semibold">API State:</Text>
        {isLoading && <Text>Loading...</Text>}
        {error && <Text>Error: {JSON.stringify(error.body)}</Text>}
        {data && <Text>Data: {JSON.stringify(data.body)}</Text>}
      </View>

      <Pressable onPress={() => refetch()} className="bg-blue-500 p-2 rounded-md mb-4">
        <Text className="text-white">Refetch API</Text>
      </Pressable>

      <View className="p-4 border border-gray-300 rounded-lg w-11/12">
        <Text className="text-lg font-semibold">Zustand State:</Text>
        <Text>User: {user ? user.name : 'Not logged in'}</Text>
        <View className="flex-row mt-2">
          <Pressable onPress={() => setUser({ name: 'Youssef' })} className="bg-green-500 p-2 rounded-md mr-2">
            <Text className="text-white">Set User</Text>
          </Pressable>
          <Pressable onPress={logout} className="bg-red-500 p-2 rounded-md">
            <Text className="text-white">Logout</Text>
          </Pressable>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}


export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  );
}
