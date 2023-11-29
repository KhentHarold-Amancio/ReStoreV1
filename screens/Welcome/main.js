import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Layout = () => {
    const [fontsLoaded] = useFonts({
        ChakraPetchBold: require('../assets/fonts/ChakraPetch-Bold.ttf'),
        ChakraPetchMedium: require('../assets/fonts/ChakraPetch-Medium.ttf'),
        ChakraPetchRegular: require('../assets/fonts/ChakraPetch-Regular.ttf'),
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    if (!fontsLoaded) return null;
    
    return <Stack onLayout={onLayoutRootView}/>;
}

export default Layout;