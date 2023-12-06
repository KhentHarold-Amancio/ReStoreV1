import { View, Text } from "react-native";
import { Stack } from "expo-router";
import React from "react";

const WelcomeLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
      <Stack.Screen name="overview" options={{ headerShown: false }} />
    </Stack>
  );
};

export default WelcomeLayout;
