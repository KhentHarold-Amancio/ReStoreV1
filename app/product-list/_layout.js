import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { FONT, COLORS } from "../../constants";

const ListLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="list"
        options={{
          headerTitleStyle: {
            marginTop: 10,
            fontSize: 40,
            fontFamily: FONT.bold,
            color: COLORS.white,
          },
        }}
      />
    </Stack>
  );
};

export default ListLayout;
