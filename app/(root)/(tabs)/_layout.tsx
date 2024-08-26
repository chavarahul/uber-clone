import { Stack } from 'expo-router';

const Layout = () =>{
 
  return (
    <Stack>
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="profile" options={{ headerShown: false }} />      
    </Stack>
  );
}

export default Layout;
