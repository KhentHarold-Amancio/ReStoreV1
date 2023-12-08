import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { initializeApp } from 'firebase/app';

SplashScreen.preventAutoHideAsync();

const AppLayout = () => {

    const firebaseConfig = {
        apiKey: "AIzaSyDO1H6Fc1ME9fDYE37vE_IDHEL15Q3VP4A",
        authDomain: "restore-4c294.firebaseapp.com",
        databaseURL: "https://restore-4c294-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "restore-4c294",
        storageBucket: "restore-4c294.appspot.com",
        messagingSenderId: "199335244079",
        appId: "1:199335244079:web:9e4e22f0143a954aa2f1da",
        measurementId: "G-8ZPBLM1J86"
    }

    const app = initializeApp(firebaseConfig);

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