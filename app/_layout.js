<<<<<<< HEAD
import { Stack } from "expo-router";
import { useCallback, useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
=======
import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { initializeApp } from 'firebase/app';
>>>>>>> 49ff8e0784df07276dd1eb7c32d4e786b4b856a4

SplashScreen.preventAutoHideAsync();

const AppLayout = () => {
<<<<<<< HEAD
  const [fontsLoaded] = useFonts({
    ChakraPetchBold: require("../assets/fonts/ChakraPetch-Bold.ttf"),
    ChakraPetchMedium: require("../assets/fonts/ChakraPetch-Medium.ttf"),
    ChakraPetchRegular: require("../assets/fonts/ChakraPetch-Regular.ttf"),
    ChakraPetchLight: require("../assets/fonts/ChakraPetch-Light.ttf"),
  });
=======

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
>>>>>>> 49ff8e0784df07276dd1eb7c32d4e786b4b856a4

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark}>
        <Stack
          onLayout={onLayoutRootView}
          screenOptions={{ headerShown: false }}
        />
      </ApplicationProvider>
    </>
  );
};

export default AppLayout;
