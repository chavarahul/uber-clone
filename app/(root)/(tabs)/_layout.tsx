import { Tabs } from 'expo-router';
import { View,Image } from 'react-native-reanimated/lib/typescript/Animated';

const Layout = () => {

    const TabIcon = () => (
        <View>
            <View>
                <Image

                />
            </View>
        </View>
    )
 
    return (
        <Tabs initialRouteName='index' screenOptions={{
            tabBarActiveTintColor: 'white'
        }}>
            <Tabs.Screen
                name='home'
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon:() => <TabIcon/>
                }}
            />

        </Tabs>
    );
}

export default Layout;
