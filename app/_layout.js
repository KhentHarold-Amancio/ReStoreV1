import { Stack } from "expo-router";
import { useCallback, useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

SplashScreen.preventAutoHideAsync();

const AppLayout = () => {
  const [fontsLoaded] = useFonts({
    ChakraPetchBold: require("../assets/fonts/ChakraPetch-Bold.ttf"),
    ChakraPetchMedium: require("../assets/fonts/ChakraPetch-Medium.ttf"),
    ChakraPetchRegular: require("../assets/fonts/ChakraPetch-Regular.ttf"),
    ChakraPetchLight: require("../assets/fonts/ChakraPetch-Light.ttf"),
  });

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
