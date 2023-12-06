import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const SettingStackLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false}}>
      <Stack.Screen name="about" options={{ headerShown: true }} />
    </Stack>
  )
}

export default SettingStackLayout