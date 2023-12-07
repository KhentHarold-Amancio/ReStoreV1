import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { useRestore } from '../hooks/useRestore';

SplashScreen.preventAutoHideAsync();

const AppLayout = () => {
    const { grossSales, forecastData } = useRestore();
    const [fontsLoaded] = useFonts({
        ChakraPetchBold: require('../assets/fonts/ChakraPetch-Bold.ttf'),
        ChakraPetchMedium: require('../assets/fonts/ChakraPetch-Medium.ttf'),
        ChakraPetchRegular: require('../assets/fonts/ChakraPetch-Regular.ttf'),
        ChakraPetchLight: require('../assets/fonts/ChakraPetch-Light.ttf'),
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    if (!fontsLoaded) return null;
    
    return ( 
        <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.dark}>
            <Stack onLayout={onLayoutRootView} screenOptions={{headerShown: false}} initialRouteName='home'/>
        </ApplicationProvider>
        </>
    )
}

export default AppLayout;